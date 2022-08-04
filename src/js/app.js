import { heroArray} from './arrayfilter';


   let newArray = heroArray.filter(function (el) {
    return el.health>=90;
  })
  console.log(newArray);