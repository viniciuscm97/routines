
class MainController {
  async test() {
    try {
      console.log('test')
      console.log(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))
    } catch (error) {
      console.log({
        erro: error,
      })
    }
  }
}

export default new MainController();
