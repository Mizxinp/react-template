import exampleModel from 'FEAT/example/TestPage/model'

const models = [exampleModel]

export default function registerModels(app) {
    models.forEach((model) => {
        app.model(model)
    })
}
