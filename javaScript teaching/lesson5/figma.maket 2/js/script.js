const list = document.querySelector('.filter')
const items = document.querySelectorAll('.portfolio_img')
const listItems = document.querySelectorAll('.button')
    
function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target

        if(target.classList.contains('button')) {
            listItems.forEach(listItem => listItem.classList.remove('active'))
        target.classList.add('active')
        }
        

        switch(targetId) {
            case 'all':
                getItems('portfolio_img')
                break
            case 'website':
                getItems(targetId)
                break
            case 'app':
                getItems(targetId)
                break
            case 'design':
                getItems(targetId)
                 break
            case 'marketing':
                getItems(targetId)
                 break
                            
        }
        
    })
}
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = "block"
        } else
        item.style.display = "none"
    })
}