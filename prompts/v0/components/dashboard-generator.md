# Dashboard Generator

> **Template Version**: 1.0  
> **Last Updated**: December 2024  
> **Contributor**: PromptFoundry Team

## 📋 Description

Generate comprehensive, responsive dashboards with interactive charts, key metrics, and modern UI components optimized for V0.dev. This prompt creates production-ready dashboards with proper data visualization, responsive layouts, and accessibility features.

- **Primary purpose**: Generate complete dashboard interfaces with charts and metrics
- **Target audience**: Product managers, developers, and data analysts
- **Problem solved**: Eliminates the complexity of building data-rich dashboards from scratch
- **Key benefits**: Rapid prototyping, consistent design patterns, responsive layouts

## 🛠️ Tool Compatibility

- [ ] **Cursor** - IDE-specific functionality
- [x] **V0.dev** - UI component generation
- [ ] **Windsurf** - Full-stack development
- [x] **Lovable** - Rapid prototyping
- [ ] **Universal** - Works across multiple tools

## 🏷️ Category

**Primary**: UI/UX Design

**Secondary**: Code Generation, Data Visualization

## 🎯 Use Cases

- **Analytics Dashboards**: Create comprehensive analytics and reporting interfaces
- **Admin Panels**: Build management dashboards for applications
- **Business Intelligence**: Design executive and operational dashboards
- **Monitoring Dashboards**: Create system and application monitoring interfaces

## 📝 The Prompt

```
Create a modern, responsive dashboard interface with the following specifications:

Dashboard Type: [DASHBOARD_TYPE]
Key Metrics: [KEY_METRICS]
Chart Types: [CHART_SPECIFICATIONS]
Data Categories: [DATA_CATEGORIES]

Requirements:
1. Use a modern design system with consistent spacing and typography
2. Create a responsive grid layout that works on desktop, tablet, and mobile
3. Include interactive charts using Recharts or similar library
4. Add key performance indicator (KPI) cards with trend indicators
5. Implement proper loading states and empty states
6. Use shadcn/ui components for consistent styling
7. Include filters and date range selectors
8. Add export functionality buttons
9. Ensure accessibility with proper ARIA labels
10. Use proper color schemes for data visualization

Layout Structure:
1. Header with title, filters, and actions
2. KPI cards row with key metrics
3. Main charts section with 2-3 primary visualizations
4. Secondary metrics or detailed tables
5. Footer with additional actions or info

Design Requirements:
- Clean, minimal interface with proper white space
- Consistent color palette (primary, secondary, accent colors)
- Hover states and interactive elements
- Responsive breakpoints for different screen sizes
- Loading skeletons for better UX
- Error handling and empty states

Make it production-ready with proper TypeScript interfaces and component structure.
```

## 💡 Example Usage

### Scenario
You need to create an e-commerce analytics dashboard that shows sales performance, customer metrics, and product insights.

### Input
```
Dashboard Type: E-commerce Analytics Dashboard
Key Metrics: 
- Total Revenue (with % change)
- Orders Count (with % change)
- Average Order Value
- Customer Acquisition Cost
- Conversion Rate
- Top Products Performance

Chart Types:
- Line chart for revenue over time
- Bar chart for top products
- Donut chart for traffic sources
- Area chart for customer acquisition

Data Categories: Sales, Customers, Products, Marketing
```

### Expected Output
A complete dashboard interface with:
- Header with date range picker and export buttons
- 6 KPI cards showing key metrics with trend indicators
- Revenue trend line chart
- Top products bar chart
- Traffic sources donut chart
- Customer acquisition area chart
- Responsive grid layout
- Loading states and proper styling

## 🎨 Customization Options

### Variables to Replace
- `[DASHBOARD_TYPE]`: Type of dashboard (Analytics, Admin, Monitoring, etc.)
- `[KEY_METRICS]`: List of important metrics to display
- `[CHART_SPECIFICATIONS]`: Types of charts and their data requirements
- `[DATA_CATEGORIES]`: Main categories of data being visualized

### Optional Modifications
- **For real-time dashboards**: Add auto-refresh functionality and live data indicators
- **For mobile-first**: Prioritize mobile layout and touch interactions
- **For dark mode**: Include dark theme variants and theme switching
- **For advanced analytics**: Add drill-down capabilities and detailed views

## ✅ Best Practices

### Do's
- ✅ Use consistent spacing and typography throughout
- ✅ Implement proper loading states for all data sections
- ✅ Include empty states with helpful messaging
- ✅ Make charts interactive with tooltips and hover effects
- ✅ Use semantic colors for different data types

### Don'ts
- ❌ Don't overcrowd the interface with too many metrics
- ❌ Don't use too many different chart types in one view
- ❌ Don't forget mobile responsiveness
- ❌ Don't use colors that are not accessible

## 🔧 Troubleshooting

### Common Issues

**Issue 1**: Charts not rendering properly on mobile
- **Solution**: Use responsive chart containers and adjust chart dimensions
- **Prevention**: Test on different screen sizes during development

**Issue 2**: Too much information causing cognitive overload
- **Solution**: Group related metrics and use progressive disclosure
- **Prevention**: Follow the 5±2 rule for information display

**Issue 3**: Poor performance with large datasets
- **Solution**: Implement pagination, virtualization, or data aggregation
- **Prevention**: Consider data loading strategies from the start

### Performance Tips
- Use chart libraries optimized for performance (Recharts, Chart.js)
- Implement lazy loading for non-critical sections
- Use proper memoization for expensive calculations

## 📊 Success Metrics

How to measure if this prompt is working well:
- **Visual Clarity**: Users can quickly understand key metrics
- **Responsiveness**: Dashboard works well on all device sizes
- **Performance**: Charts and data load within 2-3 seconds
- **Accessibility**: Meets WCAG 2.1 AA standards

## 🔗 Related Prompts

- **[Chart Component Generator](./chart-generator.md)** - Generate individual chart components
- **[KPI Card Generator](./kpi-card-generator.md)** - Create metric display cards
- **[Data Table Generator](./data-table-generator.md)** - Generate sortable data tables

## 📚 Additional Resources

- [Dashboard Design Patterns](https://dashboarddesignpatterns.github.io/) - Design best practices
- [Recharts Documentation](https://recharts.org/) - Chart library documentation
- [shadcn/ui Components](https://ui.shadcn.com/) - UI component library

## 🏷️ Tags

`dashboard` `analytics` `charts` `v0` `ui-design` `data-visualization`

## 📝 Changelog

### v1.0 - December 2024
- Initial version
- Core dashboard generation functionality
- Responsive design support
- Chart integration

---

**💡 Pro Tip**: Start with the most important metrics and gradually add complexity. Users should be able to understand the key insights within 5 seconds of viewing the dashboard.

**🤝 Contribution**: Found this helpful? Consider contributing your own prompts or improvements! 