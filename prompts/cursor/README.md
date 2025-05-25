# Cursor IDE Prompts

Welcome to the Cursor-specific prompt collection! These prompts are optimized for use with Cursor IDE's AI features, including the chat interface, composer, and inline suggestions.

## 🎯 What Makes These Prompts Special

Cursor prompts are designed to:
- Work seamlessly with Cursor's codebase context
- Leverage Cursor's file understanding capabilities
- Integrate with Cursor's composer for complex tasks
- Provide IDE-specific functionality and shortcuts

## 📁 Available Categories

### 🔧 Code Generation
Generate production-ready code with proper TypeScript, testing, and documentation.

- **[React Component Generator](./code-generation/react-component-generator.md)** - Create complete React components with TypeScript
- **[API Route Generator](./code-generation/api-route-generator.md)** - Generate Express/Next.js API endpoints
- **[Database Schema Generator](./code-generation/database-schema-generator.md)** - Create database models and migrations
- **[Hook Generator](./code-generation/react-hook-generator.md)** - Generate custom React hooks

### 📝 Documentation
Create comprehensive documentation for your codebase.

- **[API Documentation Generator](./documentation/api-docs-generator.md)** - Generate OpenAPI/Swagger docs
- **[README Generator](./documentation/readme-generator.md)** - Create project README files
- **[Code Comments Generator](./documentation/code-comments.md)** - Add JSDoc and inline comments
- **[Changelog Generator](./documentation/changelog-generator.md)** - Generate release notes

### 🔍 Review & Analysis
Analyze and improve your existing code.

- **[Code Review Assistant](./review/code-review-assistant.md)** - Comprehensive code review
- **[Security Audit](./review/security-audit.md)** - Security vulnerability analysis
- **[Performance Analyzer](./review/performance-analyzer.md)** - Performance optimization suggestions
- **[Refactoring Assistant](./review/refactoring-assistant.md)** - Code refactoring recommendations

### 🧪 Testing
Generate comprehensive test suites and quality assurance.

- **[Unit Test Generator](./testing/unit-test-generator.md)** - Generate Jest/Vitest unit tests
- **[Integration Test Generator](./testing/integration-test-generator.md)** - Create integration tests
- **[E2E Test Generator](./testing/e2e-test-generator.md)** - Generate Playwright/Cypress tests
- **[Test Data Generator](./testing/test-data-generator.md)** - Create mock data and fixtures

## 🚀 How to Use with Cursor

### Method 1: Chat Interface
1. Open Cursor IDE
2. Press `Cmd+L` (Mac) or `Ctrl+L` (Windows/Linux) to open chat
3. Copy and paste your customized prompt
4. Provide additional context about your codebase
5. Review and apply the generated code

### Method 2: Composer
1. Press `Cmd+I` (Mac) or `Ctrl+I` (Windows/Linux) to open composer
2. Use prompts for complex, multi-file changes
3. Let Cursor understand your entire codebase context
4. Apply changes across multiple files

### Method 3: Inline Suggestions
1. Start typing your code
2. Use prompts as comments to guide AI suggestions
3. Let Cursor auto-complete based on prompt context

## 💡 Pro Tips for Cursor

### Leverage Codebase Context
- Cursor automatically understands your project structure
- Reference existing files and patterns in your prompts
- Ask for consistency with your existing code style

### Use File References
```
Based on the pattern in src/components/Button.tsx, create a similar Input component...
```

### Combine with Cursor Features
- Use prompts with Cursor's "Apply" feature for quick iterations
- Leverage Cursor's understanding of your dependencies
- Reference your package.json and tsconfig.json automatically

### Optimize for Your Workflow
- Create custom prompt variations for your team's standards
- Save frequently used prompts as Cursor snippets
- Integrate with your linting and formatting rules

## 🔗 Integration Examples

### With ESLint/Prettier
```
Generate a React component that follows our ESLint rules defined in .eslintrc.js and uses our Prettier configuration.
```

### With TypeScript
```
Create a TypeScript utility function that leverages our existing types from src/types/index.ts.
```

### With Testing Framework
```
Generate Jest tests that follow the patterns established in our existing test files in __tests__/.
```

## 📊 Success Metrics

When using these prompts with Cursor, you should see:
- **Faster Development**: 50-70% reduction in boilerplate coding time
- **Better Quality**: Generated code follows your project's patterns
- **Consistency**: Uniform code style across your team
- **Learning**: Improved understanding of best practices

## 🤝 Contributing Cursor-Specific Prompts

When contributing prompts for Cursor:
1. Test with Cursor's latest features
2. Ensure prompts work with codebase context
3. Include Cursor-specific tips and shortcuts
4. Consider integration with Cursor's composer

## 📚 Additional Resources

- [Cursor Documentation](https://cursor.sh/docs) - Official Cursor docs
- [Cursor Community](https://cursor.sh/community) - Community discussions
- [Cursor Changelog](https://cursor.sh/changelog) - Latest features

---

**🎯 Quick Start**: Try the [React Component Generator](./code-generation/react-component-generator.md) to see how Cursor prompts work!

**💬 Need Help?** Join our [Discord community](https://discord.gg/promptfoundry) for Cursor-specific discussions. 