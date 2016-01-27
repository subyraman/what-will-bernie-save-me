function numberWithCommas(x) {
    const isNegative = (x < 0);
    const ret = Math.round(Math.abs(x)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (isNegative) {
        return `-$${ret}`;
    }

    return `$${ret}`;
}

module.exports = {
    numberWithCommas,
}