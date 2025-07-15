# Norbert Vozár - Portfolio

A modern, responsive Angular application showcasing my professional profile, experience, and skills.

## Features

- **Modern Design**: Clean, professional design with gradient backgrounds and glass-morphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Hover effects and smooth animations
- **Professional Sections**: 
  - About Me
  - Work Experience (with timeline)
  - Education
  - Technical Skills
  - Language Skills

## Technologies Used

- **Angular 17**: Latest version with standalone components
- **SCSS**: Advanced styling with modern CSS features
- **Font Awesome**: Icons for better visual appeal
- **Google Fonts**: Inter font family for modern typography

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd novo-represent
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── home/
│   │       ├── home.component.ts
│   │       ├── home.component.html
│   │       └── home.component.scss
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── styles.scss
├── main.ts
└── index.html
```

## Customization

The application is built with modularity in mind. You can easily customize:

- **Personal Information**: Update the `personalInfo` object in `home.component.ts`
- **Experience**: Modify the `experience` array
- **Education**: Update the `education` array
- **Skills**: Edit the `technicalSkills` object
- **Languages**: Modify the `languages` array
- **Styling**: Customize colors and design in the SCSS files

## Contact

- **Phone**: +421 910 122 858
- **Email**: norbert.vozaar@gmail.com
- **Location**: Lipovnik, district Roznava, Slovakia

## License

This project is open source and available under the [MIT License](LICENSE).