export const districts = [
  { name: "North District", xRange: [-50, -10], zRange: [-50, -10] },
  { name: "East District", xRange: [10, 50], zRange: [-50, -10] },
  { name: "South District", xRange: [-50, -10], zRange: [10, 50] },
  { name: "West District", xRange: [10, 50], zRange: [10, 50] },
  { name: "Central District", xRange: [-10, 10], zRange: [-10, 10] }
];

export function assignDistrict(house) {
  for (let district of districts) {
    if (
      house.position.x >= district.xRange[0] && house.position.x <= district.xRange[1] &&
      house.position.z >= district.zRange[0] && house.position.z <= district.zRange[1]
    ) {
      house.userData.district = district.name;
      break;
    }
  }
}