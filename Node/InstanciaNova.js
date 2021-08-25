// retornnar uma nova instancia
// uma fnção factory retorna uma nova instancia

module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}