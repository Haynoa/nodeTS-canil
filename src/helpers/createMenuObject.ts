type menuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'

export const createMenuObject = (activeMenu: menuOptions) => {

    let returnObjct = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if(activeMenu !== ''){
        returnObjct[activeMenu] = true
    }

    return returnObjct
}