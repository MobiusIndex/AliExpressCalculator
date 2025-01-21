// app.js 文件内容

document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate');
    const resultContainer = document.getElementById('result');

    calculateButton.addEventListener('click', function() {
        const weight = parseFloat(document.getElementById('weight').value);
        const cost = parseFloat(document.getElementById('cost').value);
        const profitMargin = parseFloat(document.getElementById('profitMargin').value) / 100;
        const transactionFee = parseFloat(document.getElementById('transactionFee').value);
        const domesticShipping = parseFloat(document.getElementById('domesticShipping').value);
        const internationalShipping = parseFloat(document.getElementById('internationalShipping').value);

        if (isNaN(weight) || isNaN(cost) || isNaN(profitMargin) || isNaN(transactionFee) || isNaN(domesticShipping) || isNaN(internationalShipping)) {
            resultContainer.innerHTML = '请确保所有输入都是有效的数字。';
            return;
        }

        const totalCost = cost + transactionFee + domesticShipping + internationalShipping;
        const sellingPrice = totalCost / (1 - profitMargin);
        const profit = sellingPrice - totalCost;

        resultContainer.innerHTML = `
            <p>售价: ${sellingPrice.toFixed(2)} 元</p>
            <p>利润: ${profit.toFixed(2)} 元</p>
        `;
    });
});