# React Component Generator

> **Template Version**: 1.0  
> **Last Updated**: December 2024  
> **Contributor**: PromptFoundry Team

## 📋 Description

Generate production-ready React components with TypeScript, proper prop interfaces, accessibility features, and comprehensive documentation. This prompt creates components that follow modern React patterns, include proper error handling, and are optimized for maintainability and reusability.

- **Primary purpose**: Generate complete React components with TypeScript
- **Target audience**: Intermediate to advanced React developers
- **Problem solved**: Eliminates boilerplate and ensures consistent component structure
- **Key benefits**: Saves time, enforces best practices, includes accessibility and testing considerations

## 🛠️ Tool Compatibility

- [x] **Cursor** - IDE-specific functionality
- [ ] **V0.dev** - UI component generation
- [ ] **Windsurf** - Full-stack development
- [ ] **Lovable** - Rapid prototyping
- [x] **Universal** - Works across multiple tools

## 🏷️ Category

**Primary**: Code Generation

**Secondary**: UI/UX Design, Documentation

## 🎯 Use Cases

- **Component Library Development**: Create reusable components for design systems
- **Feature Development**: Generate components for new application features
- **Refactoring Legacy Code**: Convert class components to modern functional components
- **Rapid Prototyping**: Quickly scaffold components for testing ideas

## 📝 The Prompt

```
You are an expert React developer. Generate a production-ready React component with the following specifications:

Component Name: [COMPONENT_NAME]
Purpose: [COMPONENT_PURPOSE]
Props: [PROP_SPECIFICATIONS]

Requirements:
1. Use TypeScript with proper interface definitions
2. Include comprehensive JSDoc comments
3. Implement proper accessibility (ARIA labels, keyboard navigation)
4. Add error boundaries and prop validation
5. Include loading and error states where applicable
6. Follow React best practices (hooks, memo when needed)
7. Add CSS modules or styled-components for styling
8. Include unit test structure comments
9. Add Storybook story template
10. Ensure responsive design considerations

Structure the output as:
1. Component interface/types
2. Main component implementation
3. Default props and prop types
4. CSS/styling (if applicable)
5. Usage examples
6. Test structure outline
7. Storybook story template

Make the component reusable, maintainable, and follow modern React patterns. Include helpful comments explaining complex logic.
```

## 💡 Example Usage

### Scenario
You need to create a reusable Button component for your design system that supports different variants, sizes, and states.

### Input
```
Component Name: Button
Purpose: Reusable button component with multiple variants and states
Props: 
- variant: 'primary' | 'secondary' | 'danger' | 'ghost'
- size: 'sm' | 'md' | 'lg'
- disabled: boolean
- loading: boolean
- onClick: function
- children: ReactNode
- icon: optional ReactNode
```

### Expected Output
```typescript
// Button.types.ts
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

// Button.tsx
import React from 'react';
import { ButtonProps } from './Button.types';
import styles from './Button.module.css';

/**
 * Reusable Button component with multiple variants and states
 * 
 * @param variant - Visual style variant
 * @param size - Button size
 * @param disabled - Whether button is disabled
 * @param loading - Whether button is in loading state
 * @param onClick - Click handler function
 * @param children - Button content
 * @param icon - Optional icon element
 * @param className - Additional CSS classes
 * @param type - Button type attribute
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  children,
  icon,
  className = '',
  type = 'button',
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;
    onClick?.(event);
  };

  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    loading && styles.loading,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.content}>{children}</span>
    </button>
  );
};

Button.displayName = 'Button';
```

## 🎨 Customization Options

### Variables to Replace
- `[COMPONENT_NAME]`: The name of your component (PascalCase)
- `[COMPONENT_PURPOSE]`: Brief description of what the component does
- `[PROP_SPECIFICATIONS]`: Detailed list of props with types and descriptions

### Optional Modifications
- **For form components**: Add form validation and error handling
- **For data components**: Include loading states and error boundaries
- **For complex components**: Add reducer pattern for state management
- **For animated components**: Include Framer Motion or CSS transitions

## ✅ Best Practices

### Do's
- ✅ Always specify TypeScript interfaces for props
- ✅ Include accessibility attributes and keyboard navigation
- ✅ Add comprehensive JSDoc comments for better IDE support
- ✅ Consider performance with React.memo for expensive components
- ✅ Include error boundaries for components that might fail

### Don'ts
- ❌ Don't forget to handle edge cases and error states
- ❌ Don't skip accessibility considerations
- ❌ Don't create overly complex components (follow single responsibility)
- ❌ Don't forget to export types for consumers

## 🔧 Troubleshooting

### Common Issues

**Issue 1**: Generated component has TypeScript errors
- **Solution**: Ensure all prop types are properly defined and imported
- **Prevention**: Always specify complete prop interfaces before generation

**Issue 2**: Component doesn't follow project conventions
- **Solution**: Customize the prompt with your specific style guide requirements
- **Prevention**: Include your project's coding standards in the prompt

**Issue 3**: Missing accessibility features
- **Solution**: Explicitly request ARIA labels and keyboard navigation
- **Prevention**: Always include accessibility requirements in the prompt

### Performance Tips
- Use React.memo for components that receive complex props
- Consider lazy loading for large components
- Implement proper key props for list items

## 📊 Success Metrics

How to measure if this prompt is working well:
- **Code Quality**: Generated components pass linting and type checking
- **Accessibility**: Components meet WCAG guidelines
- **Reusability**: Components can be easily used across different contexts
- **Maintainability**: Code is well-documented and follows consistent patterns

## 🔗 Related Prompts

- **[Hook Generator](./react-hook-generator.md)** - Generate custom React hooks
- **[Component Test Generator](../testing/component-test-generator.md)** - Generate tests for components
- **[Storybook Story Generator](../documentation/storybook-generator.md)** - Create Storybook stories

## 📚 Additional Resources

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) - TypeScript patterns
- [React Accessibility Guide](https://reactjs.org/docs/accessibility.html) - Official accessibility docs
- [Component Design Patterns](https://kentcdodds.com/blog/compound-components-with-react-hooks) - Advanced patterns

## 🏷️ Tags

`react` `typescript` `components` `accessibility` `cursor` `code-generation`

## 📝 Changelog

### v1.0 - December 2024
- Initial version
- Core component generation functionality
- TypeScript support
- Accessibility features

---

**💡 Pro Tip**: Always test the generated component in isolation before integrating it into your application. Use Storybook or a similar tool to verify all states and variants work correctly.

**🤝 Contribution**: Found this helpful? Consider contributing your own prompts or improvements! 