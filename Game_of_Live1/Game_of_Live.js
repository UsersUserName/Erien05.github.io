function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

let grid;
let cols;
let rows;
let resolution = 10;

function setup() {
    //createCanvas(3150, 1500);
    createCanvas(1500, 1500);


    cols = width / resolution;
    rows = height / resolution;

    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {

            grid[i][j] = floor(random(2));



        }
    }
}

function draw() {
    background(0);


    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let = y = j * resolution;
            if (grid[i][j] == 1) {
                fill(255);
                stroke(0);
                rect(x, y, resolution - 1, resolution - 1);
            }
        }
    }

    let next = make2DArray(cols, rows);


    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j];

            //number 1

            if (i == 0 || i == cols - 1 || j == 0 || j == rows - 1) {
                next[i][j] = state;

            } else {

                //number 1


                let sum = 0;
                let neightbors = countNeightbors(grid, i, j);



                if (state == 0 && neightbors == 3) {
                    next[i][j] = 1;
                } else if (state == 1 && (neightbors < 2 || neightbors > 3)) {
                    next[i][j] = 0;
                } else {
                    next[i][j] = state;
                }
                //number 1
            }
            //number 1
        }
    }

    grid = next;


}

function countNeightbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {

            //number 2

            //let col = (x + i + cols) % cols;
            //let row = (y + j + rows) % rows;

            //number 2

            //break

            //number 1

            let col = (x + i) % cols;
            let row = (y + j) % rows;

            //number 1


            sum += grid[col][row];



        }
    }
    sum -= grid[x][y];
    return sum;
}