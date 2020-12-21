function updateFilter(districts, data, state) {
  let district = districts.features;
  let top = 120,
    itr = 0;
    let vaccineCount=0;
  for (let i = 0; i < district.length; i++) {
    let literacy = district[i].properties;
    let districtId = district[i].id.toLowerCase();
    if (data[districtId] !== undefined) {
      // priority considered color till columns corrected
      //console.log(lum);
      let clusterColor, priority;
      if (data[districtId]["index"] < top) {
        if(data[districtId]["State"]==state){
        vaccineCount=vaccineCount+data[districtId]["Susceptibles"]-data[districtId]["vaccinated"]
        }
        clusterColor = "#EC0101";
        itr = itr + 1;
      } else {
        clusterColor = "#F1F3DE";
      }
      priority = data[districtId].Normalized_Vaccination_Priority;
      // literacy and maleliteracy considered as priority and color
      literacy.Literacy = priority;
      literacy.MaleLiteracy = clusterColor;
    } else {
      // literacy and maleliteracy considered as priority and color
      literacy.Literacy = "NA";
      literacy.MaleLiteracy = "#EAEAFA";
    }
  }
  return vaccineCount;
}

export default updateFilter;

