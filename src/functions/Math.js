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
            return (34 - (qty * 1.1));    
        }
}

export default functions


