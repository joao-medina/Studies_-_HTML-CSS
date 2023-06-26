function calculate() {
    let day = Number(document.getElementById('day').value)
    let month = Number(document.getElementById('month').value)
    let year = Number(document.getElementById('year').value)

    let date = new Date
    let dayDifference = date.getDate() - day
    let monthDifference = date.getMonth() + 1 - month
    let yearDifference = date.getFullYear() - year

    if(monthDifference < 0) {
        monthDifference = 12 - (monthDifference * (-1))
        yearDifference = yearDifference - 1
    }
    
    let container = document.querySelector('.container')
    container.innerHTML = `
        <div class="response-container">
            <div>
                <strong>${yearDifference}</strong> Years
            </div>
            <div>
                <strong>${monthDifference}</strong> Months
            </div>
            <div>
                <strong>${dayDifference}</strong> Days
            </div>
        </div>
    `
}