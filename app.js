
let grade = 50;

switch(true){
    case grade >=90:
        console.log("you did great")
        break;
        case grade >=80:
            console.log("you did good");
            break
            case grade >=70:
            console.log("you did okay");
            break;
            case grade >=60:
                console.log("you barely passed");
                break;
                case grade <60:
                    console.log("you FAILED");
                    break;
                    default:
                        console.log(grade, "is not a passing grade")
}