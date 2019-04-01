const productRepository = require('../repositories/product-repository');

const productResolver =  {
    async getById ({ id }) {        
        let result = await productRepository.getById(id);
        console.log("Result: " + JSON.stringify(result));
        return result;
    },
    async get (){
        console.log("Query resolver get");
        return await productRepository.get();
    },
    async createProduct({title, description}){
        console.log("Title: " + title + " Desc.: " + description);
        let product = {title: title, description: description};
        return await productRepository.save(product);
    },
    async updateProduct({id, title, description}){
        console.log("Title: " + title + " Desc.: " + description);
        let product = {title: title, description: description};
        let result = await productRepository.update(id, product);
        console.log("Result: " + JSON.stringify(result));
        return result;
    }
}

module.exports = productResolver;