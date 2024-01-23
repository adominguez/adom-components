module.exports = {
  branches: ['main'], // Nombre de la rama principal
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github',
    '@semantic-release/git',
  ],
  preset: 'conventionalcommits',
  // Puedes añadir más configuraciones según tus necesidades
};