export const trusted = [
    {
      id: 0,
      name: "Kambria",
      img: "kambria.svg",
    },
    {
      id: 1,
      name: "Tera",
      img: "tera.svg",
    },
    {
      id: 2,
      name: "Suter",
      img: "suter.svg",
    },
    {
      id: 3,
      name: "Monolith",
      img: "monolith.svg",
    },
    {
      id: 4,
      name: "Quarashi",
      img: "quarashi.svg",
    }
];

export const chartData2 = [
  { eth: 108, op: 89 },
  { eth: 97, op: 103 },
  { eth: 127, op: 120 },
  { eth: 182, op: 177 },
  { eth: 86, op: 102 },
  { eth: 134, op: 108 },
  { eth: 226, op: 215 },
  { eth: 167, op: 170 },
  { eth: 151, op: 192 },
  { eth: 196, op: 218 },
  { eth: 169, op: 168 },
  { eth: 108, op: 79 },
  { eth: 146, op: 153 },
  { eth: 173, op: 172 },
  { eth: 175, op: 176 },
  { eth: 252, op: 240 },
  { eth: 164, op: 161 },
  { eth: 192, op: 179 },
  { eth: 204, op: 198 },
  { eth: 275, op: 209 },
  { eth: 161, op: 162 },
  { eth: 193, op: 196 },
  { eth: 212, op: 250 },
  { eth: 367, op: 290 },
  { eth: 225, op: 270 },
  { eth: 132, op: 146 },
  { eth: 112, op: 92 },
  { eth: 174, op: 135 },
  { eth: 190, op: 207 },
  { eth: 324, op: 315 },
  { eth: 182, op: 220 },
  { eth: 245, op: 213 },
  { eth: 247, op: 190 },
  { eth: 385, op: 420 },
  { eth: 481, op: 390 },
  { eth: 498, op: 520 },
  { eth: 388, op: 300 },
  { eth: 149, op: 210 },
  { eth: 227, op: 180 },
  { eth: 293, op: 330 },
  { eth: 335, op: 270 },
  { eth: 197, op: 240 },
  { eth: 197, op: 160 },
  { eth: 448, op: 490 },
  { eth: 473, op: 380 },
  { eth: 338, op: 400 },
  { eth: 499, op: 420 },
  { eth: 315, op: 350 },
  { eth: 235, op: 180 },
  { eth: 177, op: 230 },
  { eth: 182, op: 160 },
  { eth: 161, op: 150 },
  { eth: 252, op: 290 },
  { eth: 294, op: 220 },
  { eth: 201, op: 250 },
  { eth: 213, op: 170 },
  { eth: 420, op: 460 },
  { eth: 233, op: 190 },
  { eth: 188, op: 156 },
  { eth: 350, op: 280 },
  { eth: 178, op: 230 },
  { eth: 178, op: 200 },
  { eth: 470, op: 410 },
  { eth: 143, op: 160 },
  { eth: 439, op: 380 },
  { eth: 165, op: 140 },
  { eth: 294, op: 250 },
  { eth: 323, op: 370 },
  { eth: 385, op: 320 },
  { eth: 438, op: 480 },
  { eth: 255, op: 280 },
  { eth: 140, op: 150 },
  { eth: 492, op: 420 },
  { eth: 162, op: 180 },
  { eth: 426, op: 380 },
  { eth: 307, op: 350 },
  { eth: 371, op: 310 },
  { eth: 475, op: 520 },
  { eth: 107, op: 170 },
  { eth: 341, op: 290 },
  { eth: 408, op: 450 },
  { eth: 169, op: 210 },
  { eth: 317, op: 270 },
  { eth: 480, op: 530 },
  { eth: 182, op: 180 },
  { eth: 291, op: 190 },
  { eth: 434, op: 380 },
  { eth: 448, op: 490 },
  { eth: 249, op: 280 },
  { eth: 223, op: 260 },
  { eth: 506, op: 460 },
]

function appendDates(data: { eth: number; op: number }[]): { eth: number; op: number; date: string }[] {
  const today = new Date();
  const result: { eth: number; op: number; date: string }[] = [];

  for (let i = 0; i < data.length; i++) {
    const date = new Date(today.getTime() - ((data.length - i) * 24 * 60 * 60 * 1000));
    const dateString = date.toISOString().slice(0, 10);

    result.push({
      ...data[i],
      date: dateString
    });
  }

  return result;
}
export const chartData = appendDates(chartData2)


function getRandomValue(min:number, max:number, step:number) {
  const range = (max - min) / step;
  const randomStep = Math.floor(Math.random() * (range + 1));
  return min + randomStep * step;
}

function getRandomColor(colors:any) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateBeamConfigs() {
  const beamConfigs = [];
  const colors = ['#86efac', '#14b8a6', '#22d3ee', '#818cf8', '#f472b6', '#fb923c', '#facc15'];

  for (let i = 0; i < 15; i++) {
    const duration = getRandomValue(2, 3, 0.25);
    const curvature = getRandomValue(-500, 500, 10);
    const delay = getRandomValue(0, 2.5, 0.2);
    const yoff = -curvature/30;
    const xoff = -Math.abs(-curvature/30);
    const gradientStartColor = getRandomColor(colors);
    const gradientStopColor = getRandomColor(colors);

    beamConfigs.push({
      duration,
      // startYOffset: yoff,
      // endYOffset: yoff,
      // endXOffset: xoff,
      // endXOffset: xoff,
      curvature,
      reverse: true,
      delay,
      gradientStartColor,
      gradientStopColor,
    });
  }

  return beamConfigs;
}

export const heroBeams = generateBeamConfigs();