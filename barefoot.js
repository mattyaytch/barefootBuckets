

function calculateBuckets (){
    var wage = document.getElementById('wage').value;
    var expensesBucket = (60 / 100) * wage;
    var splurgeBucket = (10 / 100) * wage;
    var fireExtinguisherBucket = (20 / 100) * wage;
    var smileBucket = (10 / 100) * wage;
    var total = wage;
    
    document.getElementById("expenses").innerHTML = "Daily Expenses: $" + expensesBucket.toFixed(0);
    document.getElementById("splurge").innerHTML = "Splurge: $" + splurgeBucket.toFixed(0);
    document.getElementById("smile").innerHTML = "Smile: $" + smileBucket.toFixed(0);
    document.getElementById("extinguisher").innerHTML = "Fire Extinguisher: $" + fireExtinguisherBucket.toFixed(0);
       document.getElementById("total").innerHTML = "Total: $" + wage;
     
    console.log("Expenses Bucket: $" + expensesBucket.toFixed(0));
    console.log("Splurge Bucket: $" + splurgeBucket.toFixed(0));
    console.log("Fire Extinguisher: $" + fireExtinguisherBucket.toFixed(0));
    console.log("Smile Bucket: $" + smileBucket.toFixed(0));
    console.log("Total: $" + total);
}