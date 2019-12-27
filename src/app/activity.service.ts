export class ActivityService {
    num = 0;
    changeActivity() {
        this.num++;
        console.log(this.num);
    }
}
