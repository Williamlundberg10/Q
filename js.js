import * as w from './EJSS.js';

var LLLL = 1
var P = 0
var APPL = 0
var Data_P = 0
SET(0)

window.onload = function() {
    //w.getId('fileInput').textContent = 'hej'
    //window.open('index.html', "_self");
}  

function replaceNumber(input) {
    // Return the mapped number if exists, otherwise return the input
    return MapR1[input] !== undefined ? MapR1[input] : input;
}

console.log();
let currentItemIndex = 0;


// Event listener for file input change
document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];

    if (!file ) {
        alert("Vänligen välj en fil.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        try {
            const dataID = JSON.parse(e.target.result);
            const data = dataID.data
            console.log(dataID);

            if (dataID.LL != "1v") {
                alert("Vänligen välj en fil.");
                return;
            }

            //console.log(`Loaded JSON data with ${data.length} items`);

            APPL = data.length
            SET()

            const namnContainer = document.getElementById('namnContainer');
            namnContainer.innerHTML = ''; // Clear previous content

            const fragment = document.createDocumentFragment(); // Use DocumentFragment for performance

            data.forEach((item) => {
                const displayStyle = (currentItemIndex == 0) ? 'display: block;' : 'display: none;';
                
                const div = document.createElement('div');
                if (item.Mod == 1) {
                    
                    div.innerHTML = `
                    <div id="${item.id}PP" class="UI" style="z-index: ${item.id}; ${displayStyle}">
                        <div class="VOO">${item.Namn}</div>
                        <div class="DOO">
                            <div class="BOO">
                                ${item.tests.map((test, index) => `
                                        <div id="${test.id}NN${item.id}" onclick="handleTestClick(${test.id}, ${item.s}, ${item.id}, ${item.Mod})" class="boxq1">${test.text}</div>
                                `).join('')}
                            </div>
                            <div style="display: flex;" id="${item.id}LL" onclick="handleTestClick(20, ${item.s}, ${item.id}, ${item.Mod})" class="boxq2">Done</div>
                        </div>
                        <div class="QWW">${item.id}/${data.length}</div>
                    </div>
                    `;

                }else if (item.Mod == 2) {
                    
                    div.innerHTML = `
                    <div id="${item.id}PP" class="UI" style="z-index: ${item.id}; ${displayStyle}">
                        <div class="VOO">${item.Namn}</div>
                        <div class="DOO">
                            <div class="BOO">
                                ${item.tests.map((test, index) => `
                                        <div id="${test.id}NN${item.id}" onclick="handleTestClick(${test.id}, ${item.s}, ${item.id}, ${item.Mod})" class="boxq1 q2">${test.text}</div>
                                `).join('')}
                            </div>
                            <div style="display: flex;" id="${item.id}LL" onclick="handleTestClick(21, ${item.s}, ${item.id}, ${item.Mod})" class="boxq2">Done</div>
                        </div>
                        <div class="QWW">${item.id}/${data.length}</div>
                    </div>
                    `;
                }else if (item.Mod == 3) {
                    
                    div.innerHTML = `
                    <div id="${item.id}PP" class="UI" style="z-index: ${item.id}; ${displayStyle}">
                        <div class="VOO">${item.Namn}</div>
                        <div class="DOO">
                            <div class="BOO q2">
                                <div id="${item.id}BB" class="boxq1 q4"></div>
                                <input type="text" placeholder="  Ange svar" id="gggggg" class="boxq1 q3">
                            </div>
                            <div style="display: flex;" id="${item.id}LL" onclick="handleTestClick(22, '${item.s}', ${item.id}, ${item.Mod})" class="boxq2">Done</div>
                        </div>
                        <div class="QWW">${item.id}/${data.length}</div>
                    </div>
                    `;
                }else if (item.Mod == 4) {
                    APPL = APPL -= 1
                    div.innerHTML = `
                    <div id="${item.id}PP" class="UI" style="z-index: ${item.id}; ${displayStyle}">
                        <div class="VOO">${item.Namn}</div>
                        <div class="DOO">
                            <div class="BOO q2">
                                <div id="${item.id}B" class="boxq1 q5">${item.text}</div>
                            </div>
                            <div style="display: flex;" id="${item.id}LL" onclick="handleTestClick(23, '', ${item.id}, ${item.Mod})" class="boxq2">Next</div>
                        </div>
                        <div class="QWW">${item.id}/${data.length}</div>
                    </div>
                    `;
                }
                LLLL = LLLL += 1
                //console.log(LLLL)
                fragment.appendChild(div);
                currentItemIndex++;
            });

            namnContainer.appendChild(fragment); // Append all elements at once
        } catch (error) {
            console.error("Fel vid parsing av JSON: ", error);
            alert("Felaktigt JSON-format.");
        }
    };

    reader.readAsText(file);
    
});

// State variables
let QQ = 0; 
let P1 = 2;
let P2 = P1 - 1; 
var LL = 0;
let isSpecialState = 0; 

// Expose the handleTestClick function to the global scope
window.handleTestClick = function (Q, W, l, NN) {
    //console.log(Q, W, l, NN);
    if (Q == 20) {
        isSpecialState = 1;
        if (LL == 1) {
            if (P1 != LLLL) {
                w.getId(P1 + 'PP').style.display = 'block'
                w.getId(P2 + 'PP').style.display = 'none'
                P1 += 1  
                LL = 0
                isSpecialState = 0;
            }else{
                window.open('D.html', "_self");
            }
        }else{
            w.getId(l + 'LL').textContent = 'Next'
            if (QQ == 1) {
                w.getId('1NN' + l).style.backgroundColor = '#951b1b';
            }else if (QQ == 2) {
                w.getId('2NN' + l).style.backgroundColor = '#951b1b';
            }else if (QQ == 3) {
                w.getId('3NN' + l).style.backgroundColor = '#951b1b';
            }else if (QQ == 4) {
                w.getId('4NN' + l).style.backgroundColor = '#951b1b';
            }
            if (W == 1) {
                w.getId('1NN' + l).style.backgroundColor = '#14aa26';
            }else if (W == 2) {
                w.getId('2NN' + l).style.backgroundColor = '#14aa26';
            }else if (W == 3) {
                w.getId('3NN' + l).style.backgroundColor = '#14aa26';
            }else if (W == 4) {
                w.getId('4NN' + l).style.backgroundColor = '#14aa26';
            }
            if (QQ == W) {
                Data_P = Data_P += 1
                SET()
            }
            LL = 1
        }
    }

    if (Q == 21) {
        isSpecialState = 1;
        if (LL == 1) {
            if (P1 != LLLL) {
                w.getId(P1 + 'PP').style.display = 'block'
                w.getId(P2 + 'PP').style.display = 'none'
                P1 += 1  
                LL = 0
                isSpecialState = 0;
            }else{
                window.open('D.html', "_self");
            }
        }else{
            w.getId(l + 'LL').textContent = 'Next'
            if (QQ == 1) {
                w.getId('1NN' + l).style.backgroundColor = '#951b1b';
            }else if (QQ == 2) {
                w.getId('2NN' + l).style.backgroundColor = '#951b1b';
            }
            if (W == 1) {
                w.getId('1NN' + l).style.backgroundColor = '#14aa26';
            }else if (W == 2) {
                w.getId('2NN' + l).style.backgroundColor = '#14aa26';
            }
            if (QQ == W) {
                Data_P = Data_P += 1
                SET()
            }
            LL = 1
        }
    }

    if (Q == 22) {
        isSpecialState = 1;
        if (LL == 1) {
            if (P1 != LLLL) {
                w.getId(P1 + 'PP').style.display = 'block'
                w.getId(P2 + 'PP').style.display = 'none'
                P1 += 1  
                LL = 0
                isSpecialState = 0;
            }else{
                window.open('D.html', "_self");
            }
        }else{
            w.getId(l + 'LL').textContent = 'Next'
            //console.log(w.getId('gggggg').value)
            var DD = w.getId('gggggg').value.toLowerCase()
            console.log(w.getId('gggggg').value.toLowerCase())
            w.getId(l + 'BB').textContent =  W
            if (DD == W) {
                w.getId('gggggg').style.backgroundColor = '#14aa26';
            }else{
                w.getId('gggggg').style.backgroundColor = '#951b1b';
            }

            if (DD == W) {
                Data_P = Data_P += 1
                SET()
            }
            LL = 1
        }
    }

    if (Q == 23) {
        if (P1 != LLLL) {
            isSpecialState = 0;
            w.getId(P1 + 'PP').style.display = 'block'
            w.getId(P2 + 'PP').style.display = 'none'
            P1 += 1
        }else{
            window.open('D.html', "_self");
        }
    }
    
    if (isSpecialState == 0 && Q != 20 && Q != 21 && Q != 22 && Q != 23 && NN == 1) {
        w.getId('1NN' + l).style.backgroundColor = '#1d1d1d';
        w.getId('2NN' + l).style.backgroundColor = '#1d1d1d';
        w.getId('3NN' + l).style.backgroundColor = '#1d1d1d';
        w.getId('4NN' + l).style.backgroundColor = '#1d1d1d';
        w.getId(Q + 'NN' + l).style.backgroundColor = '#6a6a6a';
        QQ = Q
    }

    if (isSpecialState == 0 && Q != 20 && Q != 21 && Q != 22 && Q != 23 && NN == 2) {
        w.getId('1NN' + l).style.backgroundColor = '#1d1d1d';
        w.getId('2NN' + l).style.backgroundColor = '#1d1d1d';
        w.getId(Q + 'NN' + l).style.backgroundColor = '#6a6a6a';
        QQ = Q
    }

    //console.log(QQ);

}; 




function SET() {
    localStorage.setItem("Data_P", Data_P);
    localStorage.setItem("APPL", APPL);
}

function binaryToString(binary) {
    return binary.split(' ')
                 .map(bin => String.fromCharCode(parseInt(bin, 2)))
                 .join('');
}