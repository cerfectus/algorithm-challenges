

function findPoint(px, py, qx, qy) {
    let first, second, new_x, new_y;
    first = (qx-px) 
    second = (qy-py)
    new_x = qx + first
    new_y = qy + second
    
    return [new_x, new_y]

}