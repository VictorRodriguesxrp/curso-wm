let ComparaComThis = function (param) {
    console.log(this === param)
}

// ComparaComThis(global)


const obj = {}

ComparaComThis = ComparaComThis.bind(obj)

// ComparaComThis(global)
// ComparaComThis(obj)

let ComparaComThisArrow = param => console.log(this === param)

ComparaComThisArrow(global)

const obj2 = {}

//ComparaComThisArrow = ComparaComThisArrow.bind(obj2)

ComparaComThisArrow(global)
//ComparaComThisArrow(obj2)

ComparaComThisArrow(module.exports)