function returnDinstance(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
function mapInRange(i, i1, i2, o1, o2) {
  return o1 + ((o2 - o1) / (i2 - i1)) * (i - i1);
}

function removeDuplicates(array, key) {
  let lookup = new Set();
  return array.filter(obj => !lookup.has(obj[key]) && lookup.add(obj[key]));
}

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  sub(a) {
    return new Vector(a.x - this.x, a.y - this.y);
  }
  add(a) {
    return new Vector(a.x + this.x, a.y + this.y);
  }
}

function isCircleLineIntersection(x1, y1, x2, y2, Cx, Cy, Cr) {
  var LAB = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  var Dx = (x2 - x1) / LAB;
  var Dy = (y2 - y1) / LAB;

  var t = Dx * (Cx - x1) + Dy * (Cy - y1);

  var Ex = t * Dx + x1;
  var Ey = t * Dy + y1;

  var LEC = Math.sqrt(Math.pow(Ex - Cx, 2) + Math.pow(Ey - Cy, 2));

  if (t > 0 && t < LAB) {
    if (LEC < Cr) {
      return true;
    }
  } else {
    return false;
  }
}
function returnIntersectionLineCircle(x1, y1, x2, y2, Cx, Cy, Cr) {
  var LAB = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  var Dx = (x2 - x1) / LAB;
  var Dy = (y2 - y1) / LAB;

  var t = Dx * (Cx - x1) + Dy * (Cy - y1);

  var Ex = t * Dx + x1;
  var Ey = t * Dy + y1;

  var LEC = Math.sqrt(Math.pow(Ex - Cx, 2) + Math.pow(Ey - Cy, 2));

  if (t > 0) {
    if (LEC < Cr) {
      var dt = Math.sqrt(Math.pow(Cr, 2) - Math.pow(LEC, 2));

      var Fx = (t - dt) * Dx + x1;
      var Fy = (t - dt) * Dy + y1;
      let ftp = new Vector(Fx, Fy);

      return ftp;
    } else {
      return false;
    }
  }
}
function returnIntersectionLineLine(wall, ray, player) {
  const x1 = wall.a.x;
  const y1 = wall.a.y;
  const x2 = wall.b.x;
  const y2 = wall.b.y;

  const x3 = player.position.x;
  const y3 = player.position.y;
  const x4 = player.position.x + ray.x;
  const y4 = player.position.y + ray.y;

  const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

  if (den == 0) {
    return;
  }

  const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
  const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

  if (t > 0 && t < 1 && u > 0) {
    let pt = new Vector(0, 0);
    pt.x = x1 + t * (x2 - x1);
    pt.y = y1 + t * (y2 - y1);
    return pt;
  } else {
    return;
  }
}

function isCircleCirkleIntersection(a,b, r1,r2) {
  let distance =returnDinstance(a, b);
  if (distance <= r1+r2) {
    
      return true;
    
  } else {
    return false;
  }
}