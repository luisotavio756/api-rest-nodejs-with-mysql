const database = require("../database/mysql");

var Product = () => {};

// Function Get All Books
Product.getAll = () => {
    return new Promise((resolve, reject) => {
        database.getConnection().then((conexao) => {
            conexao.query("SELECT * FROM tb_book", (err, results) => {
                var array = [];
                for(var i = 0; i < results.length; i++){
                    array.push(
                        {
                            id: results[i].id, 
                            title: results[i].title, 
                            description: results[i].description,
                            createAt: results[i].createAt,
                        }
                    );
                }

                resolve(array);  
    
                database.releaseConnection(conexao);
            });
        });
        
    });
}

// Function Find Book By Id
Product.findById = (id) => {
    return new Promise((resolve, reject) => {
        database.getConnection().then((conexao) => {
            conexao.query("SELECT * FROM tb_book WHERE id = ?", [id], (err, results) => {
                if (err) {
                    reject("Not possible search a book !");
                } else {
                    var array = [];
                    for(var i = 0; i < results.length; i++){
                        array.push(
                            {
                                id: results[i].id, 
                                title: results[i].title, 
                                description: results[i].description,
                                createAt: results[i].createAt,
                            }
                        );
                    }

                    resolve(array);  
                }

                database.releaseConnection(conexao);
            })
        })
    })
}

// Function Insert Book
Product.insert = (title, description, date) => {
    return new Promise((resolve, reject) => {
        database.getConnection().then((conexao) => {
            conexao.query("INSERT INTO tb_book(title, description, createAt) VALUES (?, ?, ?)", [title, description, date], (err, results) => {
                if (err) {
                    reject("Not Possible insert a book !");
                } else {
                    resolve("Book success insert !");
                }

                database.releaseConnection(conexao);
            })
        });
    });
}

//Function Update a Book
Product.update = (id, title, description, date) => {
    return new Promise((resolve, reject) => {
        database.getConnection().then((conexao) => {
            conexao.query("UPDATE tb_book SET title = ?, description = ?, createAt = ? WHERE id = ?", [title, description, date, id], (err, results) => {
                if (err) {
                    reject("Not possible update a book !");
                } else {
                    resolve("Book success updated !")
                }

                database.releaseConnection(conexao);
            })
        })
    })
}

// Function Book Delete
Product.delete = (id) => {
    return new Promise((resolve, reject) => {
        database.getConnection().then((conexao) => {
            conexao.query("DELETE FROM tb_book WHERE id = ?", [id], (err, results) => {
                if (err) {
                    reject("Not possible delete a book !");
                } else {
                    resolve("Book success deleted !");
                }

                database.releaseConnection(conexao);
            })
        })
    })
}

module.exports = Product;

