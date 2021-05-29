import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UsersUserController extends Controller {
  @action
  async archiveUser() {
    if (confirm('Are you sure you want to archive this user?')) {
      this.model.changeArchivedStatus();
    }
  }

  @action
  async modifyValue() {
    this.model.changeValue();

    // New method for changing user data, but returns an error despite working.
    //await this.store.findRecord('user', currentUser)
    //.then (function (user) {
    //  user.value = !user.value;
    //})
    //.catch (exception => {
    //  console.log(exception);
    //})
  }
}
