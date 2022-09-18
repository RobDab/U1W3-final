function writeToDisplay(elem){
    document.getElementById('display').value += elem
}

function showResult(){
    let result = eval(document.getElementById('display').value)
    document.getElementById('display').value = result

}

function deleteDisplay() {
    document.getElementById('display').placeholder = 'try me!'
    document.getElementById('display').value = ''
  }
    
    





