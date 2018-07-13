class Validator{
    isEmail(email){
        const filter = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return filter.test(email);
    }

    isEmpty(value){
       return  value.length === 0
    }

    exactHeight(imgHeight, height){
        return parseInt(imgHeight, 10) !== parseInt(height, 10)
    }

    minHeight(imgHeight, height){
        return parseInt(imgHeight, 10) < parseInt(height, 10)
    }

    maxHeight(imgHeight, height){
        return parseInt(imgHeight, 10) > parseInt(height, 10)
    }

    exactWidth(imgWidth, Width){
        return parseInt(imgWidth, 10) !== parseInt(Width, 10)
    }

    minWidth(imgWidth, Width){
        return parseInt(imgWidth, 10) < parseInt(Width, 10)
    }

    maxWidth(imgWidth, Width){
        return parseInt(imgWidth, 10) > parseInt(Width, 10)
    }

    minStrLen(str, number){
        return str.length < parseInt(number, 10)
    }

    maxStrLen(str, number){
        return str.length > parseInt(number, 10)
    }
}

const Validate = new Validator()

export default Validate;