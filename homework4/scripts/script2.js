// Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

const distanceInKm = Number(prompt('Enter distance in km: '));
const distanceInFeet = Number(prompt('Enter distance in feet: '));
const kmToMeters = distanceInKm * 1000;
const feetToMeters = distanceInFeet * 0.305;

if(kmToMeters > feetToMeters){
    alert(`${distanceInKm} km > ${distanceInFeet} f`);
}else{
    alert(`${distanceInKm} km < ${distanceInFeet} f`);
}
