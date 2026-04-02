/* ─── Project Data for the Projects Page ─────────────────── */

export type CategoryKey =
  | "all"
  | "data-animation"
  | "map-animation"
  | "dashboards"
  | "business-visuals"
  | "research-visuals"
  | "gis-maps"
  | "web-maps";

export interface Category {
  key: CategoryKey;
  label: string;
}

export const categories: Category[] = [
  { key: "all", label: "All" },
  { key: "data-animation", label: "Data Animation" },
  { key: "map-animation", label: "Map Animation" },
  { key: "dashboards", label: "Interactive Dashboards" },
  { key: "business-visuals", label: "Business Visualizations" },
  { key: "research-visuals", label: "Research Visualizations" },
  { key: "gis-maps", label: "GIS & Remote Sensing" },
  { key: "web-maps", label: "Interactive Web Maps" },
];

/* ─── Video Projects ─────────────────────────────────────── */

export interface VideoProject {
  title: string;
  video: string;
  description?: string;
}

export interface VideoSection {
  category: CategoryKey;
  title: string;
  promoVideo: string;
  projects: VideoProject[];
}

export const videoSections: VideoSection[] = [
  {
    category: "data-animation",
    title: "Data Animation",
    promoVideo: "/project_data_animation/overview animated data visualization.mp4",
    projects: [
      {
        title: "Racing Bar Chart",
        video: "/project_data_animation/animated racing bar charts.mp4",
        description: "Animated racing bar chart showcasing dynamic data changes over time with smooth transitions.",
      },
      {
        title: "Column Scatter Plot",
        video: "/project_data_animation/column scatter plot.mp4",
        description: "Visualizing data distribution patterns through animated column scatter plot transitions.",
      },
      {
        title: "Scatter Plot Animation",
        video: "/project_data_animation/Scatter plot.mp4",
        description: "Dynamic scatter plot animation revealing correlations and trends in multidimensional data.",
      },
    ],
  },
  {
    category: "map-animation",
    title: "Map Animation",
    promoVideo: "/project_map_animation/overview map animations.mp4",
    projects: [
      {
        title: "Origin–Destination Flow Map",
        video: "/project_map_animation/Origin–Destination Flow Map with intensity (heat) layers.mp4",
        description: "Flow map with intensity heat layers showing movement patterns between origin and destination points.",
      },
      {
        title: "Dot Map Animation",
        video: "/project_map_animation/Dot Map Animation.mp4",
        description: "Animated dot density map revealing spatial distribution patterns through progressive rendering.",
      },
      {
        title: "Choropleth Map of UK",
        video: "/project_map_animation/Choropleth Map of UK.mp4",
        description: "Animated choropleth map of the United Kingdom showing regional data variations over time.",
      },
    ],
  },
];

/* ─── Dashboard Projects ─────────────────────────────────── */

export interface DashboardProject {
  title: string;
  description: string;
  images: string[];
  githubUrl?: string;
  dashboardUrl?: string;
}

export const dashboardProjects: DashboardProject[] = [
  {
    title: "Bank Loan Analysis Dashboard",
    description:
      "Comprehensive dashboard analyzing bank loan data with insights into loan applications, funding, interest rates, and more. Divided into Summary, Overview, and Details pages.",
    images: [
      "/projects_dashboard/D6 Page 1.png",
      "/projects_dashboard/D6 Page 2.png",
      "/projects_dashboard/D6 Page 3.png",
    ],
    githubUrl: "https://github.com/rakibhasanrob/Bank_Loan_Analysis_PowerBI_SQL_Project",
    dashboardUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiYjY2MjIzZWItZjIwZi00NWVjLTlmNDAtOWVkOTQ2ZTU4ZjRmIiwidCI6ImIyODc5ZDVhLTA0ZDItNDAwNy05NTc0LTQ1MTI3NWYwNmQ4MCIsImMiOjEwfQ%3D%3D",
  },
  {
    title: "Coffee Shop Sales Analysis",
    description:
      "Sales data analysis of a coffee shop, focusing on sales trends, top product categories, and customer behavior patterns for inventory optimization.",
    images: ["/projects_dashboard/d7.png"],
    githubUrl: "https://github.com/rakibhasanrob/Coffee_Shop_Sales_Analysis_PowerBI_SQL_Project_",
    dashboardUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiYjNjZDkyZjgtNTI4MC00YzQzLTgxODAtYzJkZGM4ODZlZTYwIiwidCI6ImIyODc5ZDVhLTA0ZDItNDAwNy05NTc0LTQ1MTI3NWYwNmQ4MCIsImMiOjEwfQ%3D%3D",
  },
  {
    title: "AdventureWorks Sales Analysis",
    description:
      "Detailed examination and visualization of sales data for 2005–2008 with insights into KPIs and overall business performance.",
    images: ["/projects_dashboard/d5.png"],
    githubUrl: "https://github.com/rakibhasanrob/AdventureWorks_Sales_Analysis_Excel_Project",
  },
  {
    title: "Ecommerce Sales Analysis",
    description:
      "Analysis of company sales performance from 2011–2014, covering total sales, total orders, and total profit trends.",
    images: ["/projects_dashboard/d10.png"],
    githubUrl: "https://github.com/rakibhasanrob/Ecommerce_Sales_Analysis_POWER_BI_Project",
    dashboardUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZThjOGM5MjktOTEyMy00MDM4LWE2MGItYTk2MDZmZDQ2YzcxIiwidCI6ImIyODc5ZDVhLTA0ZDItNDAwNy05NTc0LTQ1MTI3NWYwNmQ4MCIsImMiOjEwfQ%3D%3D",
  },
  {
    title: "Human Resource Dashboard — PwC",
    description:
      "Interactive HR dashboard tracking employee demographics, performance, and promotions for data-driven workforce decisions.",
    images: ["/projects_dashboard/d4.png"],
    githubUrl: "https://github.com/rakibhasanrob/Human-Resource-Dashboard-PwC-Data-Analysis-Project",
    dashboardUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiMTZkYTcxNDItMjFhZC00ZjE1LThiOWMtY2UzOTI1ZmViZTUxIiwidCI6ImIyODc5ZDVhLTA0ZDItNDAwNy05NTc0LTQ1MTI3NWYwNmQ4MCIsImMiOjEwfQ%3D%3D",
  },
  {
    title: "Social Buzz Content Analysis",
    description:
      "Analysis of content categories on Social Buzz to identify the top 5 most popular categories for strategic content planning.",
    images: ["/projects_dashboard/d1.png"],
    githubUrl: "https://github.com/rakibhasanrob/SocialBuzz_Popular_Content_Category_Analysis_Project",
    dashboardUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiOTg5MTg3MTktMTQ0My00ZTZiLWJjMDAtYmQxODM3MGMzODIzIiwidCI6ImIyODc5ZDVhLTA0ZDItNDAwNy05NTc0LTQ1MTI3NWYwNmQ4MCIsImMiOjEwfQ%3D%3D",
  },
  {
    title: "Call Centre Analysis — PwC",
    description:
      "Analysis and visualization of call center data providing insights into performance and agent efficiency for customer service improvement.",
    images: ["/projects_dashboard/d2.png"],
    githubUrl: "https://github.com/rakibhasanrob/Call-Centre-Analysis-PWC-Switzerland-Data-Analysis-Project",
    dashboardUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiOTQzZGVjNjctZDQyYy00MjNlLWJiNjUtNzY5YzlkNTczZTM1IiwidCI6ImIyODc5ZDVhLTA0ZDItNDAwNy05NTc0LTQ1MTI3NWYwNmQ4MCIsImMiOjEwfQ%3D%3D",
  },
  {
    title: "Road Accident Analysis",
    description:
      "Analysis of road accident data identifying key trends and contributing factors for developing targeted safety measures in 2021–2022.",
    images: ["/projects_dashboard/d8.png"],
    githubUrl: "https://github.com/rakibhasanrob/Road_Accident_Analysis_EXCEL_Project",
  },
  {
    title: "Retention Analysis Dashboard",
    description:
      "Interactive Power BI dashboard offering deep insights into customer retention metrics and service statistics for enhancing retention strategies.",
    images: ["/projects_dashboard/d3-1.png", "/projects_dashboard/d3-2.png"],
    githubUrl: "https://github.com/rakibhasanrob/Retention-Analysis-Dashboard?tab=readme-ov-file",
    dashboardUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZjlmM2MyNDktZmIzMC00M2JmLWE1MTUtZmFhNmNlNDUzMzI3IiwidCI6ImIyODc5ZDVhLTA0ZDItNDAwNy05NTc0LTQ1MTI3NWYwNmQ4MCIsImMiOjEwfQ%3D%3D",
  },
];

/* ─── Gallery Sections (image-only) ──────────────────────── */

export interface GallerySection {
  category: CategoryKey;
  title: string;
  subtitle?: string;
  folder: string;
  images: string[];
}

export const gallerySections: GallerySection[] = [
  {
    category: "business-visuals",
    title: "Business-Focused Interactive Visualizations",
    subtitle: "Interactive visuals, business dashboards, and data storytelling for decision-making.",
    folder: "/project_businessvisuals",
    images: [
      "Final Chart.png",
      "d.png",
      "d2.png",
      "d3.png",
      "d4.png",
      "d5.png",
      "d6.png",
      "n1.png",
      "n2.png",
      "n3.png",
      "n4.png",
      "n5.png",
      "n6.png",
      "Screenshot 2024-12-28 234130.png",
      "Screenshot 2024-12-28 234220.png",
      "Screenshot 2024-12-28 234244.png",
      "Screenshot 2024-12-28 234520.png",
      "Screenshot 2024-12-28 234609.png",
      "Screenshot 2025-06-07 210020.png",
      "Screenshot 2025-06-07 210114.png",
      "Screenshot 2025-06-07 210140.png",
      "Screenshot 2025-06-07 210418.png",
      "Screenshot 2025-06-07 211811.png",
      "Screenshot 2025-06-07 224427.png",
      "Screenshot 2025-06-07 224549.png",
    ],
  },
  {
    category: "research-visuals",
    title: "Research-Focused Visualizations for Publications",
    subtitle: "Charts, graphs, and figures for academic and research use — statistical and analytical visuals.",
    folder: "/project_research_figures",
    images: [
      "3D Surface Plot.png",
      "3D Waterfall Plot (Spectral Plot).png",
      "3D Wireframe Plot.png",
      "Contour Plot (Topographic Map).png",
      "Contour Plot with Overlaid Scatter Points.png",
      "Grouped Histogram with Kernel Density Estimate (KDE).png",
      "Grouped Time Series Line Plot with 95% Confidence Intervals.png",
      "Joint Plot with Marginal Distributions.png",
      "Modern Generative Flow Field.png",
      "Pair Plot (Scatterplot Matrix).png",
      "Precision–Recall Curve.png",
      "Two-Way Matrix Heatmap.png",
      "Var 2.png",
      "box_violin_hybrid_polished.png",
      "boxplot_minimalist.png",
      "bubble_chart_polished.png",
      "com vis.png",
      "cont 2d.png",
      "contour_heatmap_polished.png",
      "figure_2_47F_poly3_base.png",
      "grouped_barchart_v2.png",
      "network_adjacency_matrix.png",
      "parallel_coordinates_polished.png",
      "pca_biplot_polished.png",
      "pca_loading_plot_polished.png",
      "polynomial_regression_fixed.png",
      "qq_plot_polished.png",
      "residuals_marginal_polished.png",
      "time_series_executive_polished.png",
      "volcano_plot_black_dots.png",
      "voronoi_analysis_polished.png",
    ],
  },
  {
    category: "gis-maps",
    title: "GIS & Remote Sensing Maps",
    subtitle: "Spatial analysis, satellite imagery processing, and environmental mapping.",
    folder: "/project_gis_maps",
    images: [
      "Layout.jpg",
      "Layout2.png",
      "Layout3.png",
      "Layout4.png",
      "layout1.jpg",
      "True Color.png",
      "False Color.png",
      "SWIR.png",
      "NDVI.png",
      "NDWI.png",
      "NDBI.png",
      "SAVI.png",
      "SMI.png",
      "LST.png",
      "LST 2.png",
      "LULC.png",
      "Elevation.png",
      "Slope.png",
      "Complete Vegetation Index.png",
      "Terrian and Temperature Interaction.png",
      "Vegetation Stress Map ML- LightGBM model.png",
      "AOD.png",
      "NTL.png",
      "Rainfall.png",
      "Distance from Road.png",
      "Dis Wetland.png",
      "g_Elevation.png",
      "g_LST.png",
      "g_LULC.png",
      "g_NDVI.png",
      "g_NDWI.png",
      "g_Slope.png",
      "Screenshot 2026-03-04 201611.png",
      "Screenshot 2026-03-04 201622.png",
      "Screenshot 2026-03-04 201631.png",
      "Screenshot 2026-03-04 201642.png",
      "Screenshot 2026-03-04 201651.png",
      "Screenshot 2026-03-04 201709.png",
      "Screenshot 2026-03-04 201716.png",
      "Screenshot 2026-03-06 233406.png",
      "Screenshot 2026-03-09 035739.png",
    ],
  },
  {
    category: "web-maps",
    title: "Interactive Web-Based Maps",
    subtitle: "Web-based interactive mapping experiences with custom layers and user interaction.",
    folder: "/project_static_maps",
    images: [
      "f1.png",
      "f2.png",
      "f3.png",
      "f4.png",
      "s1.png",
      "s2.png",
      "s3.png",
      "s4.png",
      "s5.png",
      "s6.png",
      "s7.png",
      "s8.png",
      "s9.png",
      "s10.png",
      "Screenshot 2024-12-28 234335.png",
      "Screenshot 2024-12-28 234413.png",
      "Screenshot 2024-12-28 234631.png",
      "Screenshot 2024-12-29 000604.png",
      "Screenshot 2025-06-07 230521.png",
      "Screenshot 2025-06-07 230615.png",
      "Screenshot 2025-06-07 230905.png",
      "Screenshot 2025-06-07 231036.png",
      "Screenshot 2025-06-07 231505.png",
      "Screenshot 2025-06-07 231742.png",
      "Screenshot 2025-06-07 231801.png",
      "Screenshot 2025-06-07 231835.png",
      "Screenshot 2025-06-07 232637.png",
      "Screenshot 2025-06-07 232828.png",
      "Screenshot 2025-06-07 232949.png",
      "Screenshot 2025-06-07 233111.png",
    ],
  },
];
