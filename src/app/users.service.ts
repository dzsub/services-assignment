import { Injectable } from "@angular/core";
import { ActivityService } from "./activity.service";

@Injectable()
export class UsersService {

  constructor(private activityService: ActivityService) {}

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
  
    onSetToInactive(id: number) {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.activityService.changeActivity();
    }
  
    onSetToActive(id: number) {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
      this.activityService.changeActivity();
    }
}