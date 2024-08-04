// Retrieve balance from local storage and display it
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('balance')) {
        const balance = localStorage.getItem('walletBalance') || 0;
        document.getElementById('balance').innerText = parseFloat(balance).toFixed(2);
    }
});

function topUp() {
    const amount = parseFloat(document.getElementById('topupAmount').value);
    if (amount) {
        // Get current balance
        let balance = parseFloat(localStorage.getItem('walletBalance')) || 0;
        // Update balance
        balance += amount;
        // Save updated balance to localStorage
        localStorage.setItem('walletBalance', balance.toFixed(2));
        // Store transaction
        addTransaction(amount, 'Top-Up');
        // Redirect to wallet page
        window.location.href = 'wallet.html';
    } else {
        document.getElementById('errorMessage').innerText = 'Please enter an amount.';
    }
}

// Function to add a transaction to localStorage
function addTransaction(amount, description) {
    const transactions = JSON.parse(localStorage.getItem('transactionHistory')) || [];

    const newTransaction = {
        date: new Date().toLocaleString(),
        amount: amount,
        description: description
    };

    transactions.push(newTransaction);
    localStorage.setItem('transactionHistory', JSON.stringify(transactions));
}

function processPayment(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const amount = document.getElementById('amount').value;

    if (cardNumber && expiryDate && cvv && amount) {
        // Simulate processing payment
        alert('Payment successful! Redirecting to wallet page...');
        // Update balance in local storage
        let balance = localStorage.getItem('walletBalance') || 0;
        balance = parseFloat(balance) + parseFloat(amount);
        localStorage.setItem('walletBalance', balance);

        window.location.href = 'wallet.html';
    } else {
        document.getElementById('errorMessage').innerText = 'Please fill in all fields correctly.';
    }
}
