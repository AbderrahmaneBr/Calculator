let screen = document.getElementById("Screen")
let curr_op
let sec_value = ""
let curr_value = ""
let curr_op_time
let insert = (op) => {
    if(op=="+"){
        curr_value && sec_value ? calc(): NaN //Calculate previous operations

        curr_value = parseFloat(screen.innerHTML, 10)
        curr_op = "+"
        curr_op_time = 1
    }
    else if(op=="-"){
        curr_value && sec_value ? calc(): NaN //Calculate previous operations

        curr_value = parseFloat(screen.innerHTML, 10)
        curr_op = "-"
        curr_op_time = 1
    }
    else if(op=="*"){
        curr_value && sec_value ? calc(): NaN //Calculate previous operations

        curr_value = parseFloat(screen.innerHTML, 10)
        curr_op = "*"
        curr_op_time = 1
    }
    else if(op=="/"){
        curr_value && sec_value ? calc(): NaN //Calculate previous operations

        curr_value = parseFloat(screen.innerHTML, 10)
        curr_op = "/"
        curr_op_time = 1
    }
    else if(op=="<-"){
        curr_value = ""
        screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1) 
    }
    else if(op=="c"){
        screen.innerHTML = ""
    }
}

let insertNum = (e)=>{
    if(curr_op_time){
        screen.innerHTML = e.innerHTML
        sec_value = screen.innerHTML
        curr_op_time = NaN
    } else {
        screen.innerHTML += e.innerHTML
        sec_value ? sec_value = screen.innerHTML : NaN
    }
}

let calc = ()=>{
    if(curr_op=="+"){
        if(curr_value && sec_value){
            screen.innerHTML = curr_value + parseFloat(sec_value, 10)
            curr_value = parseFloat(screen.innerHTML, 10)
            sec_value = ""
        } else {
            screen.innerHTML = "Error!"
            //Clearing Dirty Values
            curr_value = ""
            sec_value = ""
        }
    }
    if(curr_op=="-"){
        if(curr_value && sec_value){
            screen.innerHTML = curr_value - parseFloat(sec_value, 10)
            curr_value = parseFloat(screen.innerHTML, 10)
            sec_value = ""
        } else {
            screen.innerHTML = "Error!"
            //Clearing Dirty Values
            curr_value = ""
            sec_value = ""
        }
    }
    if(curr_op=="/"){
        if(curr_value && sec_value){
            screen.innerHTML = curr_value / parseFloat(sec_value, 10)
            curr_value = parseFloat(screen.innerHTML, 10)
            sec_value = ""
        } else {
            screen.innerHTML = "Error!"
            //Clearing Dirty Values
            curr_value = ""
            sec_value = ""
        }
    }
    if(curr_op=="*"){
        if(curr_value && sec_value){
            screen.innerHTML = curr_value * parseFloat(sec_value, 10)
            curr_value = parseFloat(screen.innerHTML, 10)
            sec_value = ""
        } else {
            screen.innerHTML = "Error!"
            //Clearing Dirty Values
            curr_value = ""
            sec_value = ""
        }
    }
}

