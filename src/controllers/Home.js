class Home {
  index(req, res) {
    res.json({
      teste: true,
    });
  }
}

export default new Home();
