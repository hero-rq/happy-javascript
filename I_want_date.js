var found = false

for (var y = 96; y <= 99; y++) {
    for (var m = 1; m <= 12; m++) {
        for (var d = 1; d <= 31; d++) {
            password = ("0" + y).slice(-2);
            password += ("0" + m).slice(-2);
            password += ("0" + d).slice(-2);

            if (_0x9a220(password) == true) {
                console.log("password: " + password);
                found = true;
                break;
            }
        }
        if (found) break;
    }
    if (found) break;
}
