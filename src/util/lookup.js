const users = [
	{
		login: 'danilo.sales',
		firstName: 'Danilo',
		lastName: 'Sales',
		likes: ['Java', 'Go', 'React']
	},
	{
		login: 'camila',
		firstName: 'Camila',
		lastName: 'Amaral',
		likes: ['React', 'Javascript']
	},
	{
		login: 'gesiel',
		firstName: 'Gesiel',
		lastName: 'Neves',
		likes: ['Go', 'C++']
	}
]

export function lookup(login, property) {
  const user = users.find(user => user.login === login);

  if(!user) {
    throw new Error('Could not find user');
  }

  if(!user.hasOwnProperty(property)) {
    throw new Error('Could not find property');
  }

  return user[property];
}