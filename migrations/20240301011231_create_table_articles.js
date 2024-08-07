exports.up = function(knex, Promise) {
    return knex.schema.createTable('articles', table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description', 1000).notNull()
        table.string('ImageUrl', 1000)
        table.binary('content').notNull()
        table.integer('UserId').references('id')
            .inTable('users').notNull()
        table.integer('categoryId').references('id')
            .inTable('categories').notNull()
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('articles')  
};