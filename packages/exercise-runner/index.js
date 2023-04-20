import Fastify from 'fastify';
import mime from 'mime-types';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path'

const require = createRequire(import.meta.url);

const app = Fastify()

const exercisesDirectory = path.parse(require.resolve('exercises')).dir;

const getExerciseNumber = (exerciseName) => {
    return parseInt(exerciseName.split('-')[1])
}

app.get('/', function (request, response) {
    // get list of exercise directories
    const exercises = fs.readdirSync(exercisesDirectory, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
        .sort((a, b) => getExerciseNumber(a) - getExerciseNumber(b))

    response.type('text/html').send(`
        <DOCTYPE html>
        <html>
            <body>
                <h1>Exercises</h1>

                <ul>
                    ${exercises.map(exercise => `
                        <li>
                            ${exercise}

                            <ul>
                                <li><a href="/${exercise}/exercise">exercise</a></li>
                                <li><a href="/${exercise}/solution">solution</a></li>
                            </ul>
                        </li>
                    `).join('')}
                </ul>
            </body>
        </html>
    `)
})


app.get('/:exerciseName/:exerciseType', function (request, response) {
    const { exerciseName, exerciseType } = request.params;
    const stream = fs.createReadStream(path.join(exercisesDirectory, exerciseName, exerciseType, 'index.html'))

    response.type('text/html').send(stream)
})

app.get('/*', function (request, response) {
    const origin = request.headers.referer;
    const originPath = new URL(origin).pathname;
    const extension = path.extname(request.url);
    const mimeType = mime.lookup(extension);
    const [exerciseName, exerciseType] = originPath.split('/').slice(1);

    const stream = fs.createReadStream(path.join(exercisesDirectory, exerciseName, exerciseType, request.url))

    response.type(mimeType).send(stream)
})

app.listen({
    port: 3000,
}, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})