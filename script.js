let cboxContainer = document.getElementById('container')

//this array store the ids of the boes which have been checked
let array = []


// checks if array key is present in local storage and if does and its first element is empty then removes it
if (localStorage.getItem('array') !== null) {
    if (localStorage.getItem('array').split[0] === '') {
        localStorage.removeItem('array')
    }
}

// first element of array can't be empty string as this array is used to store ids which are further used to
//populate the checkboxes with tickmarks as previously checked by user 
if (array[0] === '') {
    array = []
}

//if there is a key in local storage called 'array' which stores ids of boxes that have been checked previously then converts it into an array and assigns it to the JS array defined earlier 
//NOTE: there are two things named array. One is an actual js array named array and other is a local storage key named array which saves the data in local storage

if (localStorage.getItem('array') !== null) {

    array = localStorage.getItem('array').split(',')

}

//Generates 100 checkboxes which listens for click events

for (let i = 0; i < 100; i++) {

    let box = document.createElement('div')
    box.classList.add('cbox')
    box.id = `cbox_${i}`
    box.textContent = i + 1
    cboxContainer.appendChild(box)

    box.addEventListener('click', () => {

        // toggle the class .checked which adds or removes the check mark

        document.getElementById(`cbox_${i}`).classList.toggle('checked')

        // this block checks if there the id of the box which has been clicked exists in the array which gets its values from valus stored in local storage in key array.
        // if the id exists it removes it from the variable array and then save this into local storage

        if (array.includes(`cbox_${i}`)) {
            document.getElementById(`cbox_${i}`).textContent = i + 1
            array = array.filter((e) => {
                return (e !== `cbox_${i}`)
            })

            localStorage.setItem('array', array)
          
        // if the value doesnt exist it adds it the array variable and similarly saves it to local storage

        } else {
            document.getElementById(`cbox_${i}`).textContent = ''
            array.push(`cbox_${i}`)
            localStorage.setItem('array', array)


        }
        console.log(localStorage.getItem('array'));

    })

}

//if there is an item named array in local storage and its first element if split inot an js array isn't an empty string then the string stored in array key in local storage is converted into array and saved into storageAr. The values stored are bascially ids of checkboxes which are checked. So the foreach element picks every element with that id and gives it checked class whenever you load the page.

if (localStorage.getItem('array') !== null && localStorage.getItem('array').split('')[0] !== '') {


    let storageAr = localStorage.getItem('array').split(',')

    storageAr = storageAr.filter((e) => {
        return e !== ''
    })


    storageAr.forEach((e) => {
        document.getElementById(e).classList.add('checked')
        document.getElementById(e).textContent = ''

    })


}





