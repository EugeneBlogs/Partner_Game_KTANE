function StartGame() {
    document.getElementById("information-bomb").style.display = "block"
    document.getElementById("start-btn").style.display = "none"
}

let serial_number = ""
let batteries = 0
let p_parallel = false
let p_consistent = false
let p_rca = false
let p_dvid = false
let p_ps2 = false
let p_rg45 = false
let i_bob = false
let i_car = false
let i_clr = false
let i_frk = false
let i_frq = false
let i_ind = false
let i_msa = false
let i_nsa = false
let i_sig = false
let i_snd = false
let i_trn = false

function SaveInfromation() {
    if (document.getElementById("text_serial-number").value.length != 6) {
        alert("В серийном номере должно быть 6 символов.")
    } else {
        const cyrillicPattern = /^[\u0400-\u04FF]+$/;
        if (cyrillicPattern.test(document.getElementById("text_serial-number").value.toUpperCase())) {
            alert("В серийном номере должны быть только английские буквы и цифры.")
        } else {
            serial_number = document.getElementById("text_serial-number").value.toUpperCase()
            batteries = Number(document.getElementById("text_batteries").value)
            if (document.getElementById("p_check_parallel").checked) p_parallel = true
            if (document.getElementById("p_check_consistent").checked) p_consistent = true
            if (document.getElementById("p_check_rca").checked) p_rca = true
            if (document.getElementById("p_check_dvi-d").checked) p_dvid = true
            if (document.getElementById("p_check_ps-2").checked) p_ps2 = true
            if (document.getElementById("p_check_rg-45").checked) p_rg45 = true
            if (document.getElementById("i_check_bob").checked) i_bob = true
            if (document.getElementById("i_check_car").checked) i_car = true
            if (document.getElementById("i_check_clr").checked) i_clr = true
            if (document.getElementById("i_check_frk").checked) i_frk = true
            if (document.getElementById("i_check_frq").checked) i_frq = true
            if (document.getElementById("i_check_ind").checked) i_ind = true
            if (document.getElementById("i_check_msa").checked) i_msa = true
            if (document.getElementById("i_check_nsa").checked) i_nsa = true
            if (document.getElementById("i_check_sig").checked) i_sig = true
            if (document.getElementById("i_check_snd").checked) i_snd = true
            if (document.getElementById("i_check_trn").checked) i_trn = true
            document.getElementById("information-bomb").style.display = "none"
            document.getElementById("select-module").style.display = "block"
            document.getElementById("itog_sn").innerHTML = serial_number
            document.getElementById("itog_kolvo").innerHTML = batteries
            let str_ports = ""
            if (p_parallel) str_ports += "параллельный, "
            if (p_consistent) str_ports += "последовательный, "
            if (p_rca) str_ports += "двухканальный RCA, "
            if (p_dvid) str_ports += "DVI-D, "
            if (p_ps2) str_ports += "PS/2, "
            if (p_rg45) str_ports += "RJ-45, "
            if (str_ports == "") {
                str_ports = "отсутствуют"
            } else {
                str_ports = str_ports.substring(0, str_ports.length - 2);
            }
            document.getElementById("itog_ports").innerHTML = str_ports
            let str_inds = ""
            if (i_bob) str_inds += "BOB, "
            if (i_car) str_inds += "CAR, "
            if (i_clr) str_inds += "CLR, "
            if (i_frk) str_inds += "FRK, "
            if (i_frq) str_inds += "FRQ, "
            if (i_ind) str_inds += "IND, "
            if (i_msa) str_inds += "MSA, "
            if (i_nsa) str_inds += "NSA, "
            if (i_sig) str_inds += "SIG, "
            if (i_snd) str_inds += "SND, "
            if (i_trn) str_inds += "TRN, "
            if (str_inds == "") {
                str_inds = "отсутствуют"
            } else {
                str_inds = str_inds.substring(0, str_inds.length - 2);
            }
            document.getElementById("itog_inds").innerHTML = str_inds
        }
    }
}

function Choose(number) {
    document.getElementById("module_1").style.display = "none"
    document.getElementById("module_2").style.display = "none"
    document.getElementById("module_3").style.display = "none"
    document.getElementById("module_4").style.display = "none"
    document.getElementById("module_5").style.display = "none"
    document.getElementById("module_6").style.display = "none"
    document.getElementById("module_7").style.display = "none"
    document.getElementById("module_8").style.display = "none"
    document.getElementById("module_9").style.display = "none"
    document.getElementById("module_10").style.display = "none"
    document.getElementById("module_11").style.display = "none"
    document.getElementById("module_12").style.display = "none"
    document.getElementById("module_13").style.display = "none"
    document.getElementById("module_14").style.display = "none"
    if (number == 1) document.getElementById("module_1").style.display = "block"
    if (number == 2) document.getElementById("module_2").style.display = "block"
    if (number == 3) document.getElementById("module_3").style.display = "block"
    if (number == 4) document.getElementById("module_4").style.display = "block"
    if (number == 5) document.getElementById("module_5").style.display = "block"
    if (number == 6) document.getElementById("module_6").style.display = "block"
    if (number == 7) document.getElementById("module_7").style.display = "block"
    if (number == 8) document.getElementById("module_8").style.display = "block"
    if (number == 9) document.getElementById("module_9").style.display = "block"
    if (number == 10) document.getElementById("module_10").style.display = "block"
    if (number == 11) document.getElementById("module_11").style.display = "block"
    if (number == 12) document.getElementById("module_12").style.display = "block"
    if (number == 13) document.getElementById("module_13").style.display = "block"
    if (number == 14) document.getElementById("module_14").style.display = "block"
}

function getLatestDigit(text) {
    for (var i = text.length - 1; i >= 0; i--) {
        if (!isNaN(text.charAt(i))) return text.charAt(i);
    }
    return null;
}

function CheckModule1() {
    let input_Morze = document.getElementById("text_Morze").value
    let letters = input_Morze.split(' ');
    let letters_rus = []
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] == ".-") {
            letters_rus.push("А")
        } else if (letters[i] == "-...") {
            letters_rus.push("Б")
        } else if (letters[i] == ".--") {
            letters_rus.push("В")
        } else if (letters[i] == "--.") {
            letters_rus.push("Г")
        } else if (letters[i] == "-..") {
            letters_rus.push("Д")
        } else if (letters[i] == ".") {
            letters_rus.push("Е")
        } else if (letters[i] == "...-") {
            letters_rus.push("Ж")
        } else if (letters[i] == "--..") {
            letters_rus.push("З")
        } else if (letters[i] == "..") {
            letters_rus.push("И")
        } else if (letters[i] == ".---") {
            letters_rus.push("Й")
        } else if (letters[i] == "-.-") {
            letters_rus.push("К")
        } else if (letters[i] == ".-..") {
            letters_rus.push("Л")
        } else if (letters[i] == "--") {
            letters_rus.push("М")
        } else if (letters[i] == "-.") {
            letters_rus.push("Н")
        } else if (letters[i] == "---") {
            letters_rus.push("О")
        } else if (letters[i] == ".--.") {
            letters_rus.push("П")
        } else if (letters[i] == ".-.") {
            letters_rus.push("Р")
        } else if (letters[i] == "...") {
            letters_rus.push("С")
        } else if (letters[i] == "-") {
            letters_rus.push("Т")
        } else if (letters[i] == "..-") {
            letters_rus.push("У")
        } else if (letters[i] == "..-.") {
            letters_rus.push("Ф")
        } else if (letters[i] == "....") {
            letters_rus.push("Х")
        } else if (letters[i] == "-.-.") {
            letters_rus.push("Ц")
        } else if (letters[i] == "---.") {
            letters_rus.push("Ч")
        } else if (letters[i] == "----") {
            letters_rus.push("Ш")
        } else if (letters[i] == "--.-") {
            letters_rus.push("Щ")
        } else if (letters[i] == "--.--") {
            letters_rus.push("Ъ")
        } else if (letters[i] == "-..-") {
            letters_rus.push("Ь")
        } else if (letters[i] == "-.--") {
            letters_rus.push("Ы")
        } else if (letters[i] == "..-..") {
            letters_rus.push("Э")
        } else if (letters[i] == "..--") {
            letters_rus.push("Ю")
        } else if (letters[i] == ".-.-") {
            letters_rus.push("Я")
        }
        if (letters_rus[0] == "Б") {
            if (letters_rus[1] == "О") {
                alert("Введите: 3.595 МГц.")
                return 0
            } else if (letters_rus[1] == "Р") {
                alert("Введите: 3.532 МГц.")
                return 0
            } else {
                alert("Недостаточно данных или неверно заполненные данные.")
                return 0
            }
        } else if (letters_rus[0] == "В") {
            if (letters_rus[1] == "Е") {
                alert("Введите: 3.522 МГц.")
                return 0
            } else if (letters_rus[1] == "И") {
                if (letters_rus[2] == "Л") {
                    alert("Введите: 3.555 МГц.")
                    return 0
                } else if (letters_rus[2] == "Т") {
                    alert("Введите: 3.545 МГц.")
                    return 0
                } else {
                    alert("Недостаточно данных или неверно заполненные данные.")
                    return 0
                }
            } else if (letters_rus[1] == "О") {
                alert("Введите: 3.552 МГц.")
                return 0
            } else {
                alert("Недостаточно данных или неверно заполненные данные.")
                return 0
            }
        } else if (letters_rus[0] == "К") {
            if (letters_rus[1] == "Л") {
                alert("Введите: 3.535 МГц.")
                return 0
            } else if (letters_rus[1] == "О") {
                alert("Введите: 3.572 МГц.")
                return 0
            } else {
                alert("Недостаточно данных или неверно заполненные данные.")
                return 0
            }
        } else if (letters_rus[0] == "М") {
            alert("Введите: 3.515 МГц.")
            return 0
        } else if (letters_rus[0] == "П") {
            if (letters_rus[1] == "О") {
                if (letters_rus[2] == "К") {
                    alert("Введите: 3.592 МГц.")
                    return 0
                } else if (letters_rus[2] == "М") {
                    alert("Введите: 3.825 МГц.")
                    return 0
                } else if (letters_rus[2] == "П") {
                    alert("Введите: 3.542 МГц.")
                    return 0
                } else if (letters_rus[2] == "Р") {
                    if (letters_rus[3] == "О") {
                        if (letters_rus[4] == "К") {
                            alert("Введите: 3.565 МГц.")
                            return 0
                        } else if (letters_rus[4] == "Г") {
                            alert("Введите: 3.600 МГц.")
                            return 0
                        } else {
                            alert("Недостаточно данных или неверно заполненные данные.")
                            return 0
                        }
                    } else {
                        alert("Недостаточно данных или неверно заполненные данные.")
                        return 0
                    }
                } else {
                    alert("Недостаточно данных или неверно заполненные данные.")
                    return 0
                }
            } else {
                alert("Недостаточно данных или неверно заполненные данные.")
                return 0
            }
        } else if (letters_rus[0] == "Р") {
            alert("Введите: 3.575 МГц.")
            return 0
        } else if (letters_rus[0] == "Т") {
            alert("Введите: 3.505 МГц.")
            return 0
        } else {
            alert("Недостаточно данных или неверно заполненные данные.")
            return 0
        }
    }
}

function CheckModule2() {
    if (serial_number.includes('A') || serial_number.includes('E') || serial_number.includes('I') || serial_number.includes('O') || serial_number.includes('U')) {
        if (document.getElementById("m2_check_mistake-0").checked) {
            if (document.getElementById("m2_check_red").checked) {
                alert("Нажмите на кнопку СИНЕГО цвета.")
            } else if (document.getElementById("m2_check_yellow").checked) {
                alert("Нажмите на кнопку ЗЕЛЁНОГО цвета.")
            } else if (document.getElementById("m2_check_green").checked) {
                alert("Нажмите на кнопку ЖЁЛТОГО цвета.")
            } else if (document.getElementById("m2_check_blue").checked) {
                alert("Нажмите на кнопку КРАСНОГО цвета.")
            }
        } else if (document.getElementById("m2_check_mistake-1").checked) {
            if (document.getElementById("m2_check_red").checked) {
                alert("Нажмите на кнопку ЖЁЛТОГО цвета.")
            } else if (document.getElementById("m2_check_yellow").checked) {
                alert("Нажмите на кнопку КРАСНОГО цвета.")
            } else if (document.getElementById("m2_check_green").checked) {
                alert("Нажмите на кнопку СИНЕГО цвета.")
            } else if (document.getElementById("m2_check_blue").checked) {
                alert("Нажмите на кнопку ЗЕЛЁНОГО цвета.")
            }
        } else if (document.getElementById("m2_check_mistake-2").checked) {
            if (document.getElementById("m2_check_red").checked) {
                alert("Нажмите на кнопку ЗЕЛЁНОГО цвета.")
            } else if (document.getElementById("m2_check_yellow").checked) {
                alert("Нажмите на кнопку СИНЕГО цвета.")
            } else if (document.getElementById("m2_check_green").checked) {
                alert("Нажмите на кнопку ЖЁЛТОГО цвета.")
            } else if (document.getElementById("m2_check_blue").checked) {
                alert("Нажмите на кнопку КРАСНОГО цвета.")
            }
        }
    } else {
        if (document.getElementById("m2_check_mistake-0").checked) {
            if (document.getElementById("m2_check_red").checked) {
                alert("Нажмите на кнопку СИНЕГО цвета.")
            } else if (document.getElementById("m2_check_yellow").checked) {
                alert("Нажмите на кнопку КРАСНОГО цвета.")
            } else if (document.getElementById("m2_check_green").checked) {
                alert("Нажмите на кнопку ЗЕЛЁНОГО цвета.")
            } else if (document.getElementById("m2_check_blue").checked) {
                alert("Нажмите на кнопку ЖЁЛТОГО цвета.")
            }
        } else if (document.getElementById("m2_check_mistake-1").checked) {
            if (document.getElementById("m2_check_red").checked) {
                alert("Нажмите на кнопку КРАСНОГО цвета.")
            } else if (document.getElementById("m2_check_yellow").checked) {
                alert("Нажмите на кнопку ЗЕЛЁНОГО цвета.")
            } else if (document.getElementById("m2_check_green").checked) {
                alert("Нажмите на кнопку ЖЁЛТОГО цвета.")
            } else if (document.getElementById("m2_check_blue").checked) {
                alert("Нажмите на кнопку СИНЕГО цвета.")
            }
        } else if (document.getElementById("m2_check_mistake-2").checked) {
            if (document.getElementById("m2_check_red").checked) {
                alert("Нажмите на кнопку ЖЁЛТОГО цвета.")
            } else if (document.getElementById("m2_check_yellow").checked) {
                alert("Нажмите на кнопку КРАСНОГО цвета.")
            } else if (document.getElementById("m2_check_green").checked) {
                alert("Нажмите на кнопку СИНЕГО цвета.")
            } else if (document.getElementById("m2_check_blue").checked) {
                alert("Нажмите на кнопку ЗЕЛЁНОГО цвета.")
            }
        }
    }
}

function CheckModule3() {
    let group_1 = ["1", "2", "3", "4", "5", "6", "7"]
    let group_2 = ["8", "1", "7", "9", "10", "6", "11"]
    let group_3 = ["12", "13", "9", "14", "15", "3", "10"]
    let group_4 = ["16", "17", "18", "5", "14", "11", "19"]
    let group_5 = ["20", "19", "18", "21", "17", "22", "23"]
    let group_6 = ["16", "8", "24", "25", "20", "26", "27"]
    let count_cheched = 0
    let symbols = []
    let order = []
    if (document.getElementById("m3_check_s1").checked) {
        count_cheched++
        symbols.push("1")
    }
    if (document.getElementById("m3_check_s2").checked) {
        count_cheched++
        symbols.push("2")
    }
    if (document.getElementById("m3_check_s3").checked) {
        count_cheched++
        symbols.push("3")
    }
    if (document.getElementById("m3_check_s4").checked) {
        count_cheched++
        symbols.push("4")
    }
    if (document.getElementById("m3_check_s5").checked) {
        count_cheched++
        symbols.push("5")
    }
    if (document.getElementById("m3_check_s6").checked) {
        count_cheched++
        symbols.push("6")
    }
    if (document.getElementById("m3_check_s7").checked) {
        count_cheched++
        symbols.push("7")
    }
    if (document.getElementById("m3_check_s8").checked) {
        count_cheched++
        symbols.push("8")
    }
    if (document.getElementById("m3_check_s9").checked) {
        count_cheched++
        symbols.push("9")
    }
    if (document.getElementById("m3_check_s10").checked) {
        count_cheched++
        symbols.push("10")
    }
    if (document.getElementById("m3_check_s11").checked) {
        count_cheched++
        symbols.push("11")
    }
    if (document.getElementById("m3_check_s12").checked) {
        count_cheched++
        symbols.push("12")
    }
    if (document.getElementById("m3_check_s13").checked) {
        count_cheched++
        symbols.push("13")
    }
    if (document.getElementById("m3_check_s14").checked) {
        count_cheched++
        symbols.push("14")
    }
    if (document.getElementById("m3_check_s15").checked) {
        count_cheched++
        symbols.push("15")
    }
    if (document.getElementById("m3_check_s16").checked) {
        count_cheched++
        symbols.push("16")
    }
    if (document.getElementById("m3_check_s17").checked) {
        count_cheched++
        symbols.push("17")
    }
    if (document.getElementById("m3_check_s18").checked) {
        count_cheched++
        symbols.push("18")
    }
    if (document.getElementById("m3_check_s19").checked) {
        count_cheched++
        symbols.push("19")
    }
    if (document.getElementById("m3_check_s20").checked) {
        count_cheched++
        symbols.push("20")
    }
    if (document.getElementById("m3_check_s21").checked) {
        count_cheched++
        symbols.push("21")
    }
    if (document.getElementById("m3_check_s22").checked) {
        count_cheched++
        symbols.push("22")
    }
    if (document.getElementById("m3_check_s23").checked) {
        count_cheched++
        symbols.push("23")
    }
    if (document.getElementById("m3_check_s24").checked) {
        count_cheched++
        symbols.push("24")
    }
    if (document.getElementById("m3_check_s25").checked) {
        count_cheched++
        symbols.push("25")
    }
    if (document.getElementById("m3_check_s26").checked) {
        count_cheched++
        symbols.push("26")
    }
    if (document.getElementById("m3_check_s27").checked) {
        count_cheched++
        symbols.push("27")
    }
    if (count_cheched == 4) {
        if (group_1.includes(symbols[0]) && group_1.includes(symbols[1]) && group_1.includes(symbols[2]) && group_1.includes(symbols[3])) {
            for (let i = 0; i < group_1.length; i++) {
                if (group_1[i] == symbols[0]) {
                    order.push(symbols[0])
                } else if (group_1[i] == symbols[1]) {
                    order.push(symbols[1])
                } else if (group_1[i] == symbols[2]) {
                    order.push(symbols[2])
                } else if (group_1[i] == symbols[3]) {
                    order.push(symbols[3])
                }
            }
        } else if (group_2.includes(symbols[0]) && group_2.includes(symbols[1]) && group_2.includes(symbols[2]) && group_2.includes(symbols[3])) {
            for (let i = 0; i < group_2.length; i++) {
                if (group_2[i] == symbols[0]) {
                    order.push(symbols[0])
                } else if (group_2[i] == symbols[1]) {
                    order.push(symbols[1])
                } else if (group_2[i] == symbols[2]) {
                    order.push(symbols[2])
                } else if (group_2[i] == symbols[3]) {
                    order.push(symbols[3])
                }
            }
        } else if (group_3.includes(symbols[0]) && group_3.includes(symbols[1]) && group_3.includes(symbols[2]) && group_3.includes(symbols[3])) {
            for (let i = 0; i < group_3.length; i++) {
                if (group_3[i] == symbols[0]) {
                    order.push(symbols[0])
                } else if (group_3[i] == symbols[1]) {
                    order.push(symbols[1])
                } else if (group_3[i] == symbols[2]) {
                    order.push(symbols[2])
                } else if (group_3[i] == symbols[3]) {
                    order.push(symbols[3])
                }
            }
        } else if (group_4.includes(symbols[0]) && group_4.includes(symbols[1]) && group_4.includes(symbols[2]) && group_4.includes(symbols[3])) {
            for (let i = 0; i < group_4.length; i++) {
                if (group_4[i] == symbols[0]) {
                    order.push(symbols[0])
                } else if (group_4[i] == symbols[1]) {
                    order.push(symbols[1])
                } else if (group_4[i] == symbols[2]) {
                    order.push(symbols[2])
                } else if (group_4[i] == symbols[3]) {
                    order.push(symbols[3])
                }
            }
        } else if (group_5.includes(symbols[0]) && group_5.includes(symbols[1]) && group_5.includes(symbols[2]) && group_5.includes(symbols[3])) {
            for (let i = 0; i < group_5.length; i++) {
                if (group_5[i] == symbols[0]) {
                    order.push(symbols[0])
                } else if (group_5[i] == symbols[1]) {
                    order.push(symbols[1])
                } else if (group_5[i] == symbols[2]) {
                    order.push(symbols[2])
                } else if (group_5[i] == symbols[3]) {
                    order.push(symbols[3])
                }
            }
        } else if (group_6.includes(symbols[0]) && group_6.includes(symbols[1]) && group_6.includes(symbols[2]) && group_6.includes(symbols[3])) {
            for (let i = 0; i < group_6.length; i++) {
                if (group_6[i] == symbols[0]) {
                    order.push(symbols[0])
                } else if (group_6[i] == symbols[1]) {
                    order.push(symbols[1])
                } else if (group_6[i] == symbols[2]) {
                    order.push(symbols[2])
                } else if (group_6[i] == symbols[3]) {
                    order.push(symbols[3])
                }
            }
        } else {
            alert("Группа в данными символами не найдена.")
        }
        for (let i = 0; i < order.length; i++) {
            if (i == 0) {
                document.getElementById("result_s1").src = `./img/Символы/${order[i]}.png`;
            } else if (i == 1) {
                document.getElementById("result_s2").src = `./img/Символы/${order[i]}.png`;
            } else if (i == 2) {
                document.getElementById("result_s3").src = `./img/Символы/${order[i]}.png`;
            } else if (i == 3) {
                document.getElementById("result_s4").src = `./img/Символы/${order[i]}.png`;
            }
        }
    } else {
        alert("Выберите 4 символа.")
    }
}

function CheckModule4() {
    if (document.getElementById("m4_check_blue").checked && document.getElementById("m4_check_4").checked) {
        alert('ДЕРЖИТЕ кнопку и смотрите пункт "Удержание кнопки".')
    } else if (batteries > 1 && document.getElementById("m4_check_1").checked) {
        alert("НАЖМИТЕ и резко отпустите кнопку.")
    } else if (i_car && document.getElementById("m4_check_white").checked) {
        alert('ДЕРЖИТЕ кнопку и смотрите пункт "Удержание кнопки".')
    } else if (batteries > 2 && i_frk) {
        alert("НАЖМИТЕ и резко отпустите кнопку.")
    } else if (document.getElementById("m4_check_yellow").checked) {
        alert('ДЕРЖИТЕ кнопку и смотрите пункт "Удержание кнопки".')
    } else if (document.getElementById("m4_check_red").checked && document.getElementById("m4_check_2").checked) {
        alert("НАЖМИТЕ и резко отпустите кнопку.")
    } else {
        alert('ДЕРЖИТЕ кнопку и смотрите пункт "Удержание кнопки".')
    }
}

function CheckModule5() {
    document.getElementById("maze_1").style.display = "none"
    document.getElementById("maze_2").style.display = "none"
    document.getElementById("maze_3").style.display = "none"
    document.getElementById("maze_4").style.display = "none"
    document.getElementById("maze_5").style.display = "none"
    document.getElementById("maze_6").style.display = "none"
    document.getElementById("maze_7").style.display = "none"
    document.getElementById("maze_8").style.display = "none"
    document.getElementById("maze_9").style.display = "none"
    let p1x = Number(document.getElementById("m5_point1_x").value)
    let p1y = Number(document.getElementById("m5_point1_y").value)
    let p2x = Number(document.getElementById("m5_point2_x").value)
    let p2y = Number(document.getElementById("m5_point2_y").value)
    if (p1x == 1 && p1y == 2 && p2x == 6 && p2y == 3) {
        document.getElementById("maze_1").style.display = "block"
    } else if (p1x == 2 && p1y == 4 && p2x == 5 && p2y == 2) {
        document.getElementById("maze_2").style.display = "block"
    } else if (p1x == 4 && p1y == 4 && p2x == 6 && p2y == 4) {
        document.getElementById("maze_3").style.display = "block"
    } else if (p1x == 1 && p1y == 1 && p2x == 1 && p2y == 4) {
        document.getElementById("maze_4").style.display = "block"
    } else if (p1x == 4 && p1y == 6 && p2x == 5 && p2y == 3) {
        document.getElementById("maze_5").style.display = "block"
    } else if (p1x == 3 && p1y == 5 && p2x == 5 && p2y == 1) {
        document.getElementById("maze_6").style.display = "block"
    } else if (p1x == 2 && p1y == 1 && p2x == 2 && p2y == 6) {
        document.getElementById("maze_7").style.display = "block"
    } else if (p1x == 3 && p1y == 4 && p2x == 4 && p2y == 1) {
        document.getElementById("maze_8").style.display = "block"
    } else if (p1x == 1 && p1y == 5 && p2x == 3 && p2y == 2) {
        document.getElementById("maze_9").style.display = "block"
    } else {
        alert("Лабиринт с такими точками не найден.")
    }
}

function CheckModule6Text1() {
    let w1 = document.getElementById("m6_text1").value.toUpperCase()
    if (w1 == "ДА") {
        document.getElementById("m6_position").innerHTML = "Столбец 1. Строка 2."
    } else if (w1 == "ПЕРВОЕ") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 1."
    } else if (w1 == "ЭКРАН") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 3."
    } else if (w1 == "ГОТОВО") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 1."
    } else if (w1 == "ДРУГОЙ") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 3."
    } else if (w1 == "НИЧЕГО") {
        document.getElementById("m6_position").innerHTML = "Столбец 1. Строка 2."
    } else if (w1 == "") {
        document.getElementById("m6_position").innerHTML = "Столбец 1. Строка 3."
    } else if (w1 == "ПУСТО") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 2."
    } else if (w1 == "НЕТ") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 3."
    } else if (w1 == "ВЕСЕЛО") {
        document.getElementById("m6_position").innerHTML = "Столбец 1. Строка 2."
    } else if (w1 == "ВЕСИЛА") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 3."
    } else if (w1 == "ВЕСИЛО") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 2."
    } else if (w1 == "КОРИТЬСЯ") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 2."
    } else if (w1 == "КОРИЦА") {
        document.getElementById("m6_position").innerHTML = "Столбец 1. Строка 3."
    } else if (w1 == "КОРИТСЯ") {
        document.getElementById("m6_position").innerHTML = "Столбец 1. Строка 3."
    } else if (w1 == "СТОЙ") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 3."
    } else if (w1 == "ГЛАЗ") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 2."
    } else if (w1 == "ГЛАС") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 2."
    } else if (w1 == "ПОРОГ") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 2."
    } else if (w1 == "ПОРОК") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 2."
    } else if (w1 == "ПАРОК") {
        document.getElementById("m6_position").innerHTML = "Столбец 1. Строка 1."
    } else if (w1 == "КРАБ") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 3."
    } else if (w1 == "КРАП") {
        document.getElementById("m6_position").innerHTML = "Столбец 1. Строка 3."
    } else if (w1 == "КРАББ") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 2."
    } else if (w1 == "ПАС") {
        document.getElementById("m6_position").innerHTML = "Столбец 1. Строка 2."
    } else if (w1 == "ПАСС") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 3."
    } else if (w1 == "ПАЗ") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 1."
    } else if (w1 == "ПОГОДИ") {
        document.getElementById("m6_position").innerHTML = "Столбец 2. Строка 3."
    } else {
        alert("Данного слова нет в списке.")
    }
}
function CheckModule6Text2() {
    let w2 = document.getElementById("m6_text2").value.toUpperCase()
    if (w2 == "ГОТОВО") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nДА, ПОСТОЙ, ЕЩЁ РАЗ, ВЕСИЛА, ВЕСИЛО, СТОЙ, ВЕСЕЛО, ПУСТО, ГОТОВО, НЕТ, ПЕРВОЕ, ЕЩЕ РАЗ, НИЧЕГО, ПОГОДИ")
    } else if (w2 == "ПЕРВОЕ") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nВЕСИЛО, ПОСТОЙ, ДА, ВЕСИЛА, НЕТ, ВЕСЕЛО, НИЧЕГО, ЕЩЕ РАЗ, ПОГОДИ, ГОТОВО, ПУСТО, ЕЩЁ РАЗ, СТОЙ, ПЕРВОЕ")
    } else if (w2 == "НЕТ") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nПУСТО, ЕЩЕ РАЗ, ПОГОДИ, ПЕРВОЕ, ЕЩЁ РАЗ, ГОТОВО, ВЕСЕЛО, ДА, НИЧЕГО, ВЕСИЛО, СТОЙ, ПОСТОЙ, НЕТ, ВЕСИЛА")
    } else if (w2 == "ПУСТО") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nПОГОДИ, ВЕСЕЛО, ПОСТОЙ, ВЕСИЛА, ПУСТО, СТОЙ, ГОТОВО, НИЧЕГО, НЕТ, ЕЩЁ РАЗ, ВЕСИЛО, ЕЩЕ РАЗ, ДА, ПЕРВОЕ")
    } else if (w2 == "НИЧЕГО") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nЕЩЕ РАЗ, ВЕСЕЛО, ПОСТОЙ, ВЕСИЛА, ДА, ПУСТО, НЕТ, СТОЙ, ВЕСИЛО, ЕЩЁ РАЗ, ПОГОДИ, ПЕРВОЕ, НИЧЕГО, ГОТОВО")
    } else if (w2 == "ДА") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nПОСТОЙ, ВЕСЕЛО, ЕЩЕ РАЗ, ВЕСИЛА, ПЕРВОЕ, ЕЩЁ РАЗ, СТОЙ, ГОТОВО, НИЧЕГО, ДА, ВЕСИЛО, ПУСТО, НЕТ, ПОГОДИ")
    } else if (w2 == "ЕЩЁ РАЗ") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nЕЩЕ РАЗ, ЕЩЁ РАЗ, ВЕСИЛО, НИЧЕГО, ГОТОВО, ПУСТО, ВЕСИЛА, НЕТ, ПОСТОЙ, ПЕРВОЕ, ПОГОДИ, ДА, СТОЙ, ВЕСЕЛО")
    } else if (w2 == "ЕЩЕ РАЗ") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nГОТОВО, НИЧЕГО, ВЕСИЛО, ЕЩЁ РАЗ, ПОСТОЙ, ДА, ВЕСЕЛО, НЕТ, СТОЙ, ПУСТО, ЕЩЕ РАЗ, ВЕСИЛА, ПОГОДИ, ПЕРВОЕ")
    } else if (w2 == "ВЕСИЛО") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nВЕСЕЛО, ВЕСИЛО, ПЕРВОЕ, НЕТ, ВЕСИЛА, ДА, ПУСТО, ЕЩЁ РАЗ, ЕЩЕ РАЗ, ПОГОДИ, СТОЙ, ГОТОВО, ПОСТОЙ, НИЧЕГО")
    } else if (w2 == "ВЕСЕЛО") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nДА, НИЧЕГО, ГОТОВО, СТОЙ, НЕТ, ПОГОДИ, ЕЩЁ РАЗ, ВЕСЕЛО, ВЕСИЛА, ВЕСИЛО, ЕЩЕ РАЗ, ПУСТО, ПОСТОЙ, ПЕРВОЕ")
    } else if (w2 == "ВЕСИЛА") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nПУСТО, ГОТОВО, ПОСТОЙ, ЕЩЁ РАЗ, НИЧЕГО, СТОЙ, НЕТ, ПОГОДИ, ВЕСИЛО, ВЕСИЛА, ВЕСЕЛО, ПЕРВОЕ, ЕЩЕ РАЗ, ДА")
    } else if (w2 == "ПОСТОЙ") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nВЕСИЛА, НЕТ, ПЕРВОЕ, ДА, ЕЩЕ РАЗ, НИЧЕГО, ПОГОДИ, ПОСТОЙ, ВЕСИЛО, ГОТОВО, ПУСТО, СТОЙ, ЕЩЁ РАЗ, ВЕСЕЛО")
    } else if (w2 == "ПОГОДИ") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nЕЩЕ РАЗ, НЕТ, ПУСТО, ПОСТОЙ, ДА, ВЕСИЛО, ПЕРВОЕ, СТОЙ, ЕЩЁ РАЗ, ПОГОДИ, НИЧЕГО, ГОТОВО, ВЕСЕЛО, ВЕСИЛА")
    } else if (w2 == "СТОЙ") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nВЕСЕЛО, ВЕСИЛА, ДА, ГОТОВО, СТОЙ, ПОСТОЙ, НИЧЕГО, ЕЩЕ РАЗ, ПУСТО, ВЕСИЛО, ПЕРВОЕ, ЕЩЁ РАЗ, НЕТ, ПОГОДИ")
    } else if (w2 == "ВО ВСЕ") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nЧЕ?, ВОВСЕ, ВСЕ, ВСЁ, ДАЛЬШЕ, ПАС, И ТАК, ЧЁ?, ПАЗ, ВО ВСЕ, ПАСС, ЧТО?, ЖМИ, ИТАК")
    } else if (w2 == "ВОВСЕ") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nВСЕ, ДАЛЬШЕ, ЧТО?, ПАС, ПАЗ, ЖМИ, ПАСС, ЧЁ?, ВО ВСЕ, ИТАК, ВСЁ, ЧЕ?, И ТАК, ВОВСЕ")
    } else if (w2 == "ВСЕ") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nПАСС, ВОВСЕ, ПАС, ВСЕ, ДАЛЬШЕ, И ТАК, ЧЕ?, ИТАК, ВСЁ, ВО ВСЕ, ПАЗ, ЧЁ?, ЧТО?, ЖМИ")
    } else if (w2 == "ВСЁ") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nВО ВСЕ, ВСЁ, И ТАК, ДАЛЬШЕ, ПАСС, ВОВСЕ, ИТАК, ВСЕ, ПАЗ, ПАС, ЧЕ?, ЖМИ, ЧТО?, ЧЁ?")
    } else if (w2 == "И ТАК") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nЖМИ, ИТАК, И ТАК, ПАС, ПАЗ, ЧЕ?, ВСЕ, ЧЁ?, ВСЁ, ЧТО?, ДАЛЬШЕ, ПАСС, ВОВСЕ, ВО ВСЕ")
    } else if (w2 == "ИТАК") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nПАС, ЧЕ?, ДАЛЬШЕ, ПАЗ, ВСЁ, И ТАК, ПАСС, ЖМИ, ИТАК, ВО ВСЕ, ЧТО?, ЧЁ?, ВОВСЕ, ВСЕ")
    } else if (w2 == "ПАС") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nПАС, ВСЕ, ВОВСЕ, ВО ВСЕ, ЖМИ, ЧЁ?, ПАСС, ДАЛЬШЕ, ЧЕ?, ЧТО?, ВСЁ, И ТАК, ИТАК, ПАЗ")
    } else if (w2 == "ПАСС") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nИ ТАК, ИТАК, ВОВСЕ, ВСЁ, ДАЛЬШЕ, ПАСС, ЖМИ, ВО ВСЕ, ПАС, ЧТО?, ВСЕ, ЧЕ?, ЧЁ?, ПАЗ")
    } else if (w2 == "ПАЗ") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nВО ВСЕ, ЧЁ?, ВСЁ, ВСЕ, ИТАК, ЖМИ, ПАСС, ЧТО?, ВОВСЕ, ПАС, И ТАК, ДАЛЬШЕ, ПАЗ, ЧЕ?")
    } else if (w2 == "ЖМИ") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\n:ЧЕ?, ПАС, ДАЛЬШЕ, ПАЗ, ВСЕ, И ТАК, ВСЁ, ЧЁ?, ЧТО?, ВО ВСЕ, ИТАК, ВОВСЕ, ПАСС, ЖМИ")
    } else if (w2 == "ДАЛЬШЕ") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nПАЗ, ПАС, ПАСС, ВСЕ, ЧЁ?, ЧЕ?, ДАЛЬШЕ, ЧТО?, ЖМИ, ВОВСЕ, И ТАК, ВСЁ, ИТАК, ВО ВСЕ")
    } else if (w2 == "ЧЁ?") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nВОВСЕ, ИТАК, ЖМИ, ПАСС, ВО ВСЕ, И ТАК, ЧЕ?, ПАЗ, ВСЁ, ДАЛЬШЕ, ЧЁ?, ПАС, ВСЕ, ЧТО?")
    } else if (w2 == "ЧЕ?") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\nВОВСЕ, ЖМИ, ЧТО?, ВСЁ, ВО ВСЕ, ЧЁ?, ПАС, И ТАК, ЧЕ?, ИТАК, ПАЗ, ДАЛЬШЕ, ВСЕ, ПАСС")
    } else if (w2 == "ЧТО?") {
        alert("Нажмите на первую кнопку, которая появиться в данной списке:\n\n ВСЁ, ДАЛЬШЕ, ИТАК, И ТАК, ЧЁ?, ЖМИ, ПАСС, ПАЗ, ПАС, ВО ВСЕ, ЧТО?, ЧЕ?, ВОВСЕ, ВСЕ")
    } else {
        alert("Данного слова нет в списке.")
    }
}

function CheckModule7() {
    if (document.getElementById("m7_stage").value == 1) {
        if (document.getElementById("m7_value").value == 1) {
            alert("Нажмите на кнопку на позиции 2.")
        } else if (document.getElementById("m7_value").value == 2) {
            alert("Нажмите на кнопку на позиции 2.")
        } else if (document.getElementById("m7_value").value == 3) {
            alert("Нажмите на кнопку на позиции 3.")
        } else if (document.getElementById("m7_value").value == 4) {
            alert("Нажмите на кнопку на позиции 4.")
        } else {
            alert("Неверно заполненные данные.")
        }
    } else if (document.getElementById("m7_stage").value == 2) {
        if (document.getElementById("m7_value").value == 1) {
            alert("Нажмите на кнопку со значением - 4.")
        } else if (document.getElementById("m7_value").value == 2) {
            alert("Нажмите на кнопку на той же позиции, что и на этапе 1.")
        } else if (document.getElementById("m7_value").value == 3) {
            alert("Нажмите на кнопку на позиции 1.")
        } else if (document.getElementById("m7_value").value == 4) {
            alert("Нажмите на кнопку на той же позиции, что и на этапе 1.")
        } else {
            alert("Неверно заполненные данные.")
        }
    } else if (document.getElementById("m7_stage").value == 3) {
        if (document.getElementById("m7_value").value == 1) {
            alert("Нажмите на кнопку с тем же значением, что и на этапе 2.")
        } else if (document.getElementById("m7_value").value == 2) {
            alert("Нажмите на кнопку с тем же значением, что и на этапе 1.")
        } else if (document.getElementById("m7_value").value == 3) {
            alert("Нажмите на кнопку на позиции 3.")
        } else if (document.getElementById("m7_value").value == 4) {
            alert("Нажмите на кнопку со значением - 4.")
        } else {
            alert("Неверно заполненные данные.")
        }
    } else if (document.getElementById("m7_stage").value == 4) {
        if (document.getElementById("m7_value").value == 1) {
            alert("Нажмите на кнопку на той же позиции, что и на этапе 1.")
        } else if (document.getElementById("m7_value").value == 2) {
            alert("Нажмите на кнопку на позиции 1.")
        } else if (document.getElementById("m7_value").value == 3) {
            alert("Нажмите на кнопку на той же позиции, что и на этапе 2.")
        } else if (document.getElementById("m7_value").value == 4) {
            alert("Нажмите на кнопку на той же позиции, что и на этапе 2.")
        } else {
            alert("Неверно заполненные данные.")
        }
    } else if (document.getElementById("m7_stage").value == 5) {
        if (document.getElementById("m7_value").value == 1) {
            alert("Нажмите на кнопку с тем же значением, что и на этапе 1.")
        } else if (document.getElementById("m7_value").value == 2) {
            alert("Нажмите на кнопку с тем же значением, что и на этапе 2.")
        } else if (document.getElementById("m7_value").value == 3) {
            alert("Нажмите на кнопку с тем же значением, что и на этапе 4.")
        } else if (document.getElementById("m7_value").value == 4) {
            alert("Нажмите на кнопку с тем же значением, что и на этапе 3.")
        } else {
            alert("Неверно заполненные данные.")
        }
    } else {
        alert("Неверно заполненные данные.")
    }
}

function CheckModule8() {
    if (document.getElementById("m8_first").value.toUpperCase() == "А") {
        alert("Попробуйте слово:\n\nАЛЛЕЯ")
    } else if (document.getElementById("m8_first").value.toUpperCase() == "Б") {
        alert("Попробуйте слово:\n\nБОМБА")
    } else if (document.getElementById("m8_first").value.toUpperCase() == "В") {
        alert("Попробуйте слова:\n\nВВЕРХ, ВЗРЫВ, ВНИЗУ, ВЬЮГА")
    } else if (document.getElementById("m8_first").value.toUpperCase() == "Г") {
        alert("Попробуйте слова:\n\nГОРОХ, ГОТОВ, ГУСТО")
    } else if (document.getElementById("m8_first").value.toUpperCase() == "Д") {
        alert("Попробуйте слова:\n\nДАВАЙ, ДАВНО")
    } else if (document.getElementById("m8_first").value.toUpperCase() == "К") {
        alert("Попробуйте слова:\n\nКНИГА, КОНЕЦ")
    } else if (document.getElementById("m8_first").value.toUpperCase() == "Л") {
        alert("Попробуйте слова:\n\nЛИЛИЯ, ЛИНИЯ")
    } else if (document.getElementById("m8_first").value.toUpperCase() == "М") {
        alert("Попробуйте слово:\n\nМОЖНО")
    } else if (document.getElementById("m8_first").value.toUpperCase() == "Н") {
        alert("Попробуйте слова:\n\nНАЗАД, НРАВЫ")
    } else if (document.getElementById("m8_first").value.toUpperCase() == "П") {
        alert("Попробуйте слова:\n\nПЕСЕЦ, ПЕСНЯ, ПОРОХ, ПОРЫВ, ПОТОМ, ПРАВО, ПУСТО")
    } else if (document.getElementById("m8_first").value.toUpperCase() == "Р") {
        alert("Попробуйте слово:\n\nРУМБА")
    } else if (document.getElementById("m8_first").value.toUpperCase() == "С") {
        alert("Попробуйте слова:\n\nСКОРО, СУПЕР")
    } else if (document.getElementById("m8_first").value.toUpperCase() == "Т") {
        alert("Попробуйте слова:\n\nТРАВЫ, ТУМБА, ТУНЕЦ")
    } else if (document.getElementById("m8_first").value.toUpperCase() == "Ф") {
        alert("Попробуйте слово:\n\nФУГАС")
    } else if (document.getElementById("m8_first").value.toUpperCase() == "Ш") {
        alert("Попробуйте слово:\n\nШПРИЦ")
    } else if (document.getElementById("m8_first").value.toUpperCase() == "Щ") {
        alert("Попробуйте слова:\n\nЩИПОК, ЩИПЦЫ")
    } else {
        alert("На данную букву слов нет.")
    }
}

function CheckModule9() {
    if (document.getElementById("m9_check_red").checked) {
        if (Number(document.getElementById("m9_count").value) == 1) {
            if (document.getElementById("m9_check_V").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 2) {
            if (document.getElementById("m9_check_B").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 3) {
            if (document.getElementById("m9_check_A").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 4) {
            if (document.getElementById("m9_check_A").checked || document.getElementById("m9_check_V").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 5) {
            if (document.getElementById("m9_check_B").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 6) {
            if (document.getElementById("m9_check_A").checked || document.getElementById("m9_check_V").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 7) {
            alert("РЕЗАТЬ!")
        } else if (Number(document.getElementById("m9_count").value) == 8) {
            if (document.getElementById("m9_check_A").checked || document.getElementById("m9_check_B").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 9) {
            if (document.getElementById("m9_check_B").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else {
            alert("Неверно заполненные данные.")
        }
    } else if (document.getElementById("m9_check_blue").checked) {
        if (Number(document.getElementById("m9_count").value) == 1) {
            if (document.getElementById("m9_check_B").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 2) {
            if (document.getElementById("m9_check_A").checked || document.getElementById("m9_check_V").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 3) {
            if (document.getElementById("m9_check_B").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 4) {
            if (document.getElementById("m9_check_A").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 5) {
            if (document.getElementById("m9_check_B").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 6) {
            if (document.getElementById("m9_check_B").checked || document.getElementById("m9_check_V").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 7) {
            if (document.getElementById("m9_check_V").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 8) {
            if (document.getElementById("m9_check_A").checked || document.getElementById("m9_check_V").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 9) {
            if (document.getElementById("m9_check_A").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else {
            alert("Неверно заполненные данные.")
        }
    } else if (document.getElementById("m9_check_black").checked) {
        if (Number(document.getElementById("m9_count").value) == 1) {
            alert("РЕЗАТЬ!")
        } else if (Number(document.getElementById("m9_count").value) == 2) {
            if (document.getElementById("m9_check_A").checked || document.getElementById("m9_check_V").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 3) {
            if (document.getElementById("m9_check_B").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 4) {
            if (document.getElementById("m9_check_A").checked || document.getElementById("m9_check_V").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 5) {
            if (document.getElementById("m9_check_B").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 6) {
            if (document.getElementById("m9_check_B").checked || document.getElementById("m9_check_V").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 7) {
            if (document.getElementById("m9_check_A").checked || document.getElementById("m9_check_B").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 8) {
            if (document.getElementById("m9_check_V").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (Number(document.getElementById("m9_count").value) == 9) {
            if (document.getElementById("m9_check_V").checked) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else {
            alert("Неверно заполненные данные.")
        }
    }
}

function CheckModule10() {
    let count = 6
    if (document.getElementById("m10_check_w4_no").checked) {
        count = 3
        if (!document.getElementById("m10_check_w5_no").checked || !document.getElementById("m10_check_w6_no").checked) {
            alert("Невозможный случай.")
            return 0
        }
    }
    else if (document.getElementById("m10_check_w5_no").checked) {
        count = 4
        if (!document.getElementById("m10_check_w6_no").checked) {
            alert("Невозможный случай.")
            return 0
        }
    }
    else if (document.getElementById("m10_check_w6_no").checked) {
        count = 5
    }
    if (count == 3) {
        let blueWires = 0
        if (document.getElementById("m10_check_w1_blue").checked) blueWires++
        if (document.getElementById("m10_check_w2_blue").checked) blueWires++
        if (document.getElementById("m10_check_w3_blue").checked) blueWires++
        if (!document.getElementById("m10_check_w1_red").checked && !document.getElementById("m10_check_w2_red").checked && !document.getElementById("m10_check_w3_red").checked) {
            alert("Резать ВТОРОЙ.")
        } else if (document.getElementById("m10_check_w3_white").checked) {
            alert("Резать ПОСЛЕДНИЙ.")
        } else if (blueWires > 1) {
            alert("Резать ПОСЛЕДНИЙ СИНИЙ.")
        } else {
            alert("Резать ПОСЛЕДНИЙ.")
        }
    } else if (count == 4) {
        let redWires = 0
        if (document.getElementById("m10_check_w1_red").checked) redWires++
        if (document.getElementById("m10_check_w2_red").checked) redWires++
        if (document.getElementById("m10_check_w3_red").checked) redWires++
        if (document.getElementById("m10_check_w4_red").checked) redWires++
        let blueWires = 0
        if (document.getElementById("m10_check_w1_blue").checked) blueWires++
        if (document.getElementById("m10_check_w2_blue").checked) blueWires++
        if (document.getElementById("m10_check_w3_blue").checked) blueWires++
        if (document.getElementById("m10_check_w4_blue").checked) blueWires++
        let yellowWires = 0
        if (document.getElementById("m10_check_w1_yellow").checked) yellowWires++
        if (document.getElementById("m10_check_w2_yellow").checked) yellowWires++
        if (document.getElementById("m10_check_w3_yellow").checked) yellowWires++
        if (document.getElementById("m10_check_w4_yellow").checked) yellowWires++
        if (redWires > 1) {
            if (Number(getLatestDigit(serial_number)) == 1 || Number(getLatestDigit(serial_number)) == 3 || Number(getLatestDigit(serial_number)) == 5 || Number(getLatestDigit(serial_number)) == 7 || Number(getLatestDigit(serial_number)) == 9) {
                alert("Резать ПОСЛЕДНИЙ КРАСНЫЙ.")
            }
        } else if (document.getElementById("m10_check_w4_yellow").checked && redWires == 0) {
            alert("Резать ПЕРВЫЙ.")
        } else if (blueWires == 1) {
            alert("Резать ПЕРВЫЙ.")
        } else if (yellowWires > 1) {
            alert("Резать ПОСЛЕДНИЙ.")
        } else {
            alert("Резать ВТОРОЙ.")
        }
    } else if (count == 5) {
        let redWires = 0
        if (document.getElementById("m10_check_w1_red").checked) redWires++
        if (document.getElementById("m10_check_w2_red").checked) redWires++
        if (document.getElementById("m10_check_w3_red").checked) redWires++
        if (document.getElementById("m10_check_w4_red").checked) redWires++
        if (document.getElementById("m10_check_w5_red").checked) redWires++
        let blackWires = 0
        if (document.getElementById("m10_check_w1_black").checked) blackWires++
        if (document.getElementById("m10_check_w2_black").checked) blackWires++
        if (document.getElementById("m10_check_w3_black").checked) blackWires++
        if (document.getElementById("m10_check_w4_black").checked) blackWires++
        if (document.getElementById("m10_check_w5_black").checked) blackWires++
        let yellowWires = 0
        if (document.getElementById("m10_check_w1_yellow").checked) yellowWires++
        if (document.getElementById("m10_check_w2_yellow").checked) yellowWires++
        if (document.getElementById("m10_check_w3_yellow").checked) yellowWires++
        if (document.getElementById("m10_check_w4_yellow").checked) yellowWires++
        if (document.getElementById("m10_check_w5_yellow").checked) yellowWires++
        if (document.getElementById("m10_check_w5_black").checked) {
            if (Number(getLatestDigit(serial_number)) == 1 || Number(getLatestDigit(serial_number)) == 3 || Number(getLatestDigit(serial_number)) == 5 || Number(getLatestDigit(serial_number)) == 7 || Number(getLatestDigit(serial_number)) == 9) {
                alert("Резать ЧЕТВЁРТЫЙ.")
            }
        } else if (redWires == 1 && yellowWires > 1) {
            alert("Резать ПЕРВЫЙ.")
        } else if (blackWires == 0) {
            alert("Резать ВТОРОЙ.")
        } else {
            alert("Резать ПЕРВЫЙ.")
        }
    } else if (count == 6) {
        let yellowWires = 0
        if (document.getElementById("m10_check_w1_yellow").checked) yellowWires++
        if (document.getElementById("m10_check_w2_yellow").checked) yellowWires++
        if (document.getElementById("m10_check_w3_yellow").checked) yellowWires++
        if (document.getElementById("m10_check_w4_yellow").checked) yellowWires++
        if (document.getElementById("m10_check_w5_yellow").checked) yellowWires++
        if (document.getElementById("m10_check_w6_yellow").checked) yellowWires++
        let whiteWires = 0
        if (document.getElementById("m10_check_w1_white").checked) whiteWires++
        if (document.getElementById("m10_check_w2_white").checked) whiteWires++
        if (document.getElementById("m10_check_w3_white").checked) whiteWires++
        if (document.getElementById("m10_check_w4_white").checked) whiteWires++
        if (document.getElementById("m10_check_w5_white").checked) whiteWires++
        if (document.getElementById("m10_check_w6_white").checked) whiteWires++
        let redWires = 0
        if (document.getElementById("m10_check_w1_red").checked) redWires++
        if (document.getElementById("m10_check_w2_red").checked) redWires++
        if (document.getElementById("m10_check_w3_red").checked) redWires++
        if (document.getElementById("m10_check_w4_red").checked) redWires++
        if (document.getElementById("m10_check_w5_red").checked) redWires++
        if (document.getElementById("m10_check_w6_red").checked) redWires++
        if (yellowWires == 0) {
            if (Number(getLatestDigit(serial_number)) == 1 || Number(getLatestDigit(serial_number)) == 3 || Number(getLatestDigit(serial_number)) == 5 || Number(getLatestDigit(serial_number)) == 7 || Number(getLatestDigit(serial_number)) == 9) {
                alert("Резать ТРЕТИЙ.")
            }
        } else if (yellowWires == 1 && whiteWires > 1) {
            alert("Резать ЧЕТВЁРТЫЙ.")
        } else if (redWires == 0) {
            alert("Резать ПОСЛЕДНИЙ.")
        } else {
            alert("Резать ЧЕТВЁРТЫЙ.")
        }
    }
}

function CheckModule11() {
    let red = false
    let blue = false
    let white = false
    let star = false
    let light = false
    if (document.getElementById("m11_check_1").checked) red = true
    if (document.getElementById("m11_check_2").checked) blue = true
    if (document.getElementById("m11_check_3").checked) white = true
    if (document.getElementById("m11_check_4").checked) star = true
    if (document.getElementById("m11_check_5").checked) light = true
    if (red && blue) {
        if (star && light) {
            alert("НЕ РЕЗАТЬ!")
        } else if (star) {
            if (p_parallel) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (light) {
            if (Number(getLatestDigit(serial_number)) == 0 || Number(getLatestDigit(serial_number)) == 2 || Number(getLatestDigit(serial_number)) == 4 || Number(getLatestDigit(serial_number)) == 6 || Number(getLatestDigit(serial_number)) == 8) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else {
            if (Number(getLatestDigit(serial_number)) == 0 || Number(getLatestDigit(serial_number)) == 2 || Number(getLatestDigit(serial_number)) == 4 || Number(getLatestDigit(serial_number)) == 6 || Number(getLatestDigit(serial_number)) == 8) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        }
    }
    else if (red && white) {
        if (star && light) {
            if (batteries >= 2) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (star) {
            alert("РЕЗАТЬ!")
        } else if (light) {
            if (batteries >= 2) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else {
            if (Number(getLatestDigit(serial_number)) == 0 || Number(getLatestDigit(serial_number)) == 2 || Number(getLatestDigit(serial_number)) == 4 || Number(getLatestDigit(serial_number)) == 6 || Number(getLatestDigit(serial_number)) == 8) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        }
    }
    else if (blue && white) {
        if (star && light) {
            if (p_parallel) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (star) {
            alert("НЕ РЕЗАТЬ!")
        } else if (light) {
            if (p_parallel) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else {
            if (Number(getLatestDigit(serial_number)) == 0 || Number(getLatestDigit(serial_number)) == 2 || Number(getLatestDigit(serial_number)) == 4 || Number(getLatestDigit(serial_number)) == 6 || Number(getLatestDigit(serial_number)) == 8) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        }
    }
    else if (red) {
        if (star && light) {
            if (batteries >= 2) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (star) {
            alert("РЕЗАТЬ!")
        } else if (light) {
            if (batteries >= 2) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else {
            if (Number(getLatestDigit(serial_number)) == 0 || Number(getLatestDigit(serial_number)) == 2 || Number(getLatestDigit(serial_number)) == 4 || Number(getLatestDigit(serial_number)) == 6 || Number(getLatestDigit(serial_number)) == 8) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        }
    }
    else if (white) {
        if (star && light) {
            if (batteries >= 2) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (star) {
            alert("РЕЗАТЬ!")
        } else if (light) {
            alert("НЕ РЕЗАТЬ!")
        } else {
            alert("РЕЗАТЬ!")
        }
    }
   else if (blue) {
        if (star && light) {
            if (p_parallel) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else if (star) {
            alert("НЕ РЕЗАТЬ!")
        } else if (light) {
            if (p_parallel) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        } else {
            if (Number(getLatestDigit(serial_number)) == 0 || Number(getLatestDigit(serial_number)) == 2 || Number(getLatestDigit(serial_number)) == 4 || Number(getLatestDigit(serial_number)) == 6 || Number(getLatestDigit(serial_number)) == 8) {
                alert("РЕЗАТЬ!")
            } else {
                alert("НЕ РЕЗАТЬ!")
            }
        }
    } else {
        alert("Неверно заполненные данные.")
    }
}

function CheckModule13() {
    if (!document.getElementById("m13_check_1").checked && !document.getElementById("m13_check_2").checked && document.getElementById("m13_check_3").checked && !document.getElementById("m13_check_4").checked && document.getElementById("m13_check_5").checked && document.getElementById("m13_check_6").checked && document.getElementById("m13_check_7").checked && document.getElementById("m13_check_8").checked && document.getElementById("m13_check_9").checked && document.getElementById("m13_check_10").checked && !document.getElementById("m13_check_11").checked && document.getElementById("m13_check_12").checked) {
        alert("Позиция ручки: ВВЕРХ ↑.")
    } else if (document.getElementById("m13_check_1").checked && !document.getElementById("m13_check_2").checked && document.getElementById("m13_check_3").checked && !document.getElementById("m13_check_4").checked && document.getElementById("m13_check_5").checked && !document.getElementById("m13_check_6").checked && !document.getElementById("m13_check_7").checked && document.getElementById("m13_check_8").checked && document.getElementById("m13_check_9").checked && !document.getElementById("m13_check_10").checked && document.getElementById("m13_check_11").checked && document.getElementById("m13_check_12").checked) {
        alert("Позиция ручки: ВВЕРХ ↑.")
    } else if (!document.getElementById("m13_check_1").checked && document.getElementById("m13_check_2").checked && document.getElementById("m13_check_3").checked && !document.getElementById("m13_check_4").checked && !document.getElementById("m13_check_5").checked && document.getElementById("m13_check_6").checked && document.getElementById("m13_check_7").checked && document.getElementById("m13_check_8").checked && document.getElementById("m13_check_9").checked && document.getElementById("m13_check_10").checked && !document.getElementById("m13_check_11").checked && document.getElementById("m13_check_12").checked) {
        alert("Позиция ручки: ВНИЗ ↓.")
    } else if (document.getElementById("m13_check_1").checked && !document.getElementById("m13_check_2").checked && document.getElementById("m13_check_3").checked && !document.getElementById("m13_check_4").checked && document.getElementById("m13_check_5").checked && !document.getElementById("m13_check_6").checked && !document.getElementById("m13_check_7").checked && document.getElementById("m13_check_8").checked && !document.getElementById("m13_check_9").checked && !document.getElementById("m13_check_10").checked && !document.getElementById("m13_check_11").checked && document.getElementById("m13_check_12").checked) {
        alert("Позиция ручки: ВНИЗ ↓.")
    } else if (!document.getElementById("m13_check_1").checked && !document.getElementById("m13_check_2").checked && !document.getElementById("m13_check_3").checked && !document.getElementById("m13_check_4").checked && document.getElementById("m13_check_5").checked && !document.getElementById("m13_check_6").checked && document.getElementById("m13_check_7").checked && !document.getElementById("m13_check_8").checked && !document.getElementById("m13_check_9").checked && document.getElementById("m13_check_10").checked && document.getElementById("m13_check_11").checked && document.getElementById("m13_check_12").checked) {
        alert("Позиция ручки: ВЛЕВО ←.")
    } else if (!document.getElementById("m13_check_1").checked && !document.getElementById("m13_check_2").checked && !document.getElementById("m13_check_3").checked && !document.getElementById("m13_check_4").checked && document.getElementById("m13_check_5").checked && !document.getElementById("m13_check_6").checked && !document.getElementById("m13_check_7").checked && !document.getElementById("m13_check_8").checked && !document.getElementById("m13_check_9").checked && document.getElementById("m13_check_10").checked && document.getElementById("m13_check_11").checked && !document.getElementById("m13_check_12").checked) {
        alert("Позиция ручки: ВЛЕВО ←.")
    } else if (document.getElementById("m13_check_1").checked && !document.getElementById("m13_check_2").checked && document.getElementById("m13_check_3").checked && document.getElementById("m13_check_4").checked && document.getElementById("m13_check_5").checked && document.getElementById("m13_check_6").checked && document.getElementById("m13_check_7").checked && document.getElementById("m13_check_8").checked && document.getElementById("m13_check_9").checked && !document.getElementById("m13_check_10").checked && document.getElementById("m13_check_11").checked && !document.getElementById("m13_check_12").checked) {
        alert("Позиция ручки: ВПРАВО →.")
    } else if (document.getElementById("m13_check_1").checked && !document.getElementById("m13_check_2").checked && document.getElementById("m13_check_3").checked && document.getElementById("m13_check_4").checked && !document.getElementById("m13_check_5").checked && !document.getElementById("m13_check_6").checked && document.getElementById("m13_check_7").checked && document.getElementById("m13_check_8").checked && document.getElementById("m13_check_9").checked && !document.getElementById("m13_check_10").checked && document.getElementById("m13_check_11").checked && !document.getElementById("m13_check_12").checked) {
        alert("Позиция ручки: ВПРАВО →.")
    } else {
        alert("Неверно заполненные данные.")
    }
}
