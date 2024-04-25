// use server state
const validateInviteIUserDuplicate = (data: any, email: string) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].invitee.email === email) {
      return true;
    }

    return false;
  }
}

export default validateInviteIUserDuplicate;