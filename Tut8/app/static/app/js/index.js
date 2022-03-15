
const template = ({activity, type, participants, price, link, key, accessibility}) =>  (
    `<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${activity}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${type}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Participants: ${participants}</li>
                <li class="list-group-item">Price: ${price} </li>
                <li class="list-group-item">Link: ${link} </li>
                <li class="list-group-item">Key: ${key} </li>
                <li class="list-group-item">Accessibility: ${accessibility} </li>
            </ul>
        </div>
    </div>`
)

function find_activity(){
    // use Fetch to invoke the api endpoint: 'http://www.boredapi.com/api/activity/'
    // After Fetch returns, populate #content-1 with the data. Provided above is a template of what to put
    // use .then callbacks


    
    
}
function sendAjax(url){
    return new Promise((resolve, reject) => {
        $.ajax({ url })
            .done((...args) => resolve(args))
            .fail((...args) => reject(args));
    });
}

async function find_activity_by_type(){
    // use Jquery Ajax to invoke the api endpoint: 'http://www.boredapi.com/api/activity?type={INPUTSTRING}'
    // After ajax returns, populate #content-1 with the data. Provided above is a template of what to put
    // Read the following to know how to implement this with async/await
    // https://javascript.info/async-await
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    
    
}

function timeout(){
    // There are multiple bugs 
    // 1. The name should be displayed in each of the 5 lines
    // 2. Each line should display the correct number. i.e. the first line should display '... 1 time(s)'
    const name = 'name' // How to get the name from input?
    const person = {
        name: name,
        sayHi() {
            for(var i = 1; i <= 5; i++){
                setTimeout(function (){
                    $('#content-3').append((`<p>${this.name} says hi ${i} time(s)!</p>`))
                }
                , 500);
            }
            
        }
    }
    person.sayHi();
}

