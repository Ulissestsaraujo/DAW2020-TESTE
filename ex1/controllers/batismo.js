var Batismo = require('../models/batismo');

module.exports.list = () => {
    return Batismo
            .find({},{"_id":1,"date":1,"title":1,"ref":1})

            .exec()
}

module.exports.findById = (id) => {
    return Batismo
            .find({'_id': id})
            .exec()
}

module.exports.batisados = () => {
    return Batismo
            .find({},{title: 1})
            .exec()
}

module.exports.stats = () => {
    return Batismo
            .aggregate([
                { $group: { _id: {$substr: [ "$date",0, 4]} , 
                num_batismos: { $sum: 1 } 
                          } 
                }
            ])
}
module.exports.progenitores = () => {
    return Batismo
    .find({},{_id: 1,pai:1,mae:1})
    .exec()
}

