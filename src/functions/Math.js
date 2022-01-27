const functions = {
    sugar: 
        function( qty ){
            return qty * 9;
        },
    water:
        function( qty ){
            return qty * 3;
        } ,
    lts:
        function( qty ){
            return ((qty * 1.1) - 34);    
        }
}

export default functions

console.log(functions.lts(20))
