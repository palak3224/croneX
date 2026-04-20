import { useState, memo, useMemo } from "react";
import "./TechStack.css";
import technologiesData from "../../Data/technologiesData.json";

// Import category icons
import programingIcon from "../../assets/language-icons/programingtecn.svg";
import frontendIcon from "../../assets/language-icons/frontendtecn.svg";
import backendIcon from "../../assets/language-icons/backendtecn.svg";
import ecommerceIcon from "../../assets/language-icons/ecommercetecn.svg";
import cloudIcon from "../../assets/language-icons/cloudetecn.svg";
import aiIcon from "../../assets/language-icons/aitecn.svg";
import datascienceIcon from "../../assets/language-icons/datasciencetecn.svg";
import webdevelopmentIcon from "../../assets/language-icons/webdevelopmenttecn.svg";
import uiuxIcon from "../../assets/language-icons/uiuxtecn.svg";
import qaIcon from "../../assets/language-icons/qatecn.svg";

// Import technology icons
import {
  react, angular, vue, flutter, swift, html, css, javascript,
  typescript, nodejs, python, java, kotlin, php, go, ruby, vb, r,
  c, cplusplus, dotnet, dotnetcore, springboot, django, laravel,
  mysql, postgresql, mongodb, redis, sql, restapi, graphql,
  materialui, bootstrap, antdesign, shadcn, aceternityui, magicui,
  wordpress, drupal, joomla, contentful, sitecore, magento, shopify,
  woocommerce, bigcommerce, prestashop, aws, azure, googlecloud,
  docker, kubernetes, tensorflow, pytorch, keras, mxnet, scikitlearn,
  generativeai, multimodalai, spacy, nltk, opencv, retrievalaugmentedgeneration,
  snowflake, redshift, apachespark, tableau, powerbi, qlikview, airflow,
  heroku, ethereum, hyperledger, fabric, corda, solidity, rust,
  figma, adobexd, sketch, accessibility, manualtesting, selenium,
  cypress, playwright, jest, jamarin, soapui, jmeter, reactnative,
  tailwindcss, postman
} from "../../assets/language-icons";

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories = technologiesData.categories;

  // Get all technologies from selected category (all subcategories combined)
  const getTechnologiesForCategory = () => {
    const category = categories[selectedCategory];
    if (!category) return [];

    // Get all technologies from all subcategories
    const allTechnologies = [];
    category.subcategories.forEach((subcategory) => {
      allTechnologies.push(...subcategory.technologies);
    });
    // Remove duplicates
    return [...new Set(allTechnologies)];
  };

  const technologies = getTechnologiesForCategory();

  const getCategoryIcon = (iconName) => {
    const iconMap = {
      programing: programingIcon,
      frontend: frontendIcon,
      backend: backendIcon,
      ecommerce: ecommerceIcon,
      cloud: cloudIcon,
      ai: aiIcon,
      datascience: datascienceIcon,
      webdevelopment: webdevelopmentIcon,
      uiux: uiuxIcon,
      qa: qaIcon,
    };
    return iconMap[iconName] || programingIcon;
  };

  // Map technology names to their icon imports
  const getTechnologyIcon = (techName) => {
    const techIconMap = {
      // Frontend
      "React": react,
      "Angular": angular,
      "Vue": vue,
      "JavaScript": javascript,
      "TypeScript": typescript,
      "HTML": html,
      "CSS": css,
      "Material-Ui": materialui,
      "Bootstrap": bootstrap,
      "Ant Design": antdesign,
      "Shadcn-Ui": shadcn,
      "Aceternity-Ui": aceternityui,
      "Tailwind-Css": tailwindcss,
      "Magic-Ui": magicui,
      
      // Backend
      "Nodejs": nodejs,
      ".NET": dotnet,
      ".NET Core": dotnetcore,
      "SpringBoot": springboot,
      "Django": django,
      "Laravel": laravel,
      "MySQL": mysql,
      "PostgreSQL": postgresql,
      "MongoDB": mongodb,
      "Redis": redis,
      "SQL": sql,
      "RestApi": restapi,
      "GraphQL": graphql,
      
      // Programming Languages
      "Python": python,
      "Java": java,
      "C": c,
      "C++": cplusplus,
      "Kotlin": kotlin,
      "Swift": swift,
      "Ruby": ruby,
      "VB": vb,
      "R": r,
      "Go": go,
      "PHP": php,
      "Flutter": flutter,
      "React-Native": reactnative,
      
      // CMS & E-commerce
      "WordPress": wordpress,
      "Drupal": drupal,
      "Joomla": joomla,
      "Contentful": contentful,
      "Sitecore": sitecore,
      "Magento": magento,
      "Shopify": shopify,
      "WooCommerce": woocommerce,
      "BigCommerce": bigcommerce,
      "PrestaShop": prestashop,
      
      // Cloud & Containerization
      "AWS": aws,
      "Azure": azure,
      "Google Cloud": googlecloud,
      "Docker": docker,
      "Kubernetes": kubernetes,
      
      // AI/ML
      "Tensorflow": tensorflow,
      "Pytorch": pytorch,
      "Keras": keras,
      "MXNet": mxnet,
      "Scikit-Learn": scikitlearn,
      "Generative AI": generativeai,
      "Multimodal AI": multimodalai,
      "SpaCy": spacy,
      "NLTK": nltk,
      "OpenCV": opencv,
      "Retrieval-Augmented Generation": retrievalaugmentedgeneration,
      
      // Data Science
      "Snowflake": snowflake,
      "Redshift": redshift,
      "Apache Spark": apachespark,
      "Tableau": tableau,
      "Power BI": powerbi,
      "QlikView": qlikview,
      "Airflow": airflow,
      "Heroku": heroku,
      
      // Web 3.0
      "Ethereum": ethereum,
      "Hyperledger": hyperledger,
      "Fabric": fabric,
      "Corda": corda,
      "Solidity": solidity,
      "Rust": rust,
      
      // UI/UX
      "Figma": figma,
      "Adobe XD": adobexd,
      "Sketch": sketch,
      "Accessibility": accessibility,
      
      // QA
      "Manual Testing": manualtesting,
      "Selenium": selenium,
      "Cypress": cypress,
      "Playwright": playwright,
      "Jest": jest,
      "Jamarin": jamarin,
      "Postman": postman,
      "SoapUI": soapui,
      "JMeter": jmeter,
    };
    
    // Try exact match first
    if (techIconMap[techName]) {
      return techIconMap[techName];
    }
    
    // Try case-insensitive match
    const lowerTechName = techName.toLowerCase();
    for (const [key, value] of Object.entries(techIconMap)) {
      if (key.toLowerCase() === lowerTechName) {
        return value;
      }
    }
    
    // Try partial match (e.g., "Node.js" matches "Nodejs")
    const normalizedTechName = techName.replace(/[.\s-]/g, "").toLowerCase();
    for (const [key, value] of Object.entries(techIconMap)) {
      const normalizedKey = key.replace(/[.\s-]/g, "").toLowerCase();
      if (normalizedKey === normalizedTechName) {
        return value;
      }
    }
    
    return null;
  };

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  return (
    <section className="tech-section">
      <div className="tech-header">
        <h2 className="tech-heading">
          Cutting-Edge Technologies Powering Next-Gen Mobile Apps
        </h2>
        <p className="tech-subheading">
          We leverage modern technologies and platforms to build scalable,
          secure, and high-performance solutions.
        </p>
      </div>

      <div className="tech-container">
        {/* Left Side - Categories */}
        <div className="tech-categories">
          <div className="categories-list">
            {categories.map((category, index) => (
              <div key={index}>
                <div
                  className={`category-item ${
                    selectedCategory === index ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(index)}
                >
                  <span className="category-icon">
                    <img 
                      src={getCategoryIcon(category.icon)} 
                      alt={category.title}
                      className="category-icon-img"
                    />
                  </span>
                  <span className="category-title">{category.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Technologies Grid */}
        <div className="tech-grid-container">
          <div className="tech-grid">
            {technologies.length > 0 ? (
              technologies.map((tech, index) => {
                const techIcon = getTechnologyIcon(tech);
                return (
                  <div key={index} className="tech-item">
                    <div className="tech-logo">
                      {techIcon ? (
                        <img 
                          src={techIcon} 
                          alt={tech}
                          className="tech-logo-img"
                        />
                      ) : (
                        <span className="tech-logo-text">
                          {tech.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <span className="tech-name">{tech}</span>
                  </div>
                );
              })
            ) : (
              <div className="tech-empty">No technologies found</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(TechStack);
