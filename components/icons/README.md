# AI Tool Icons

This directory contains React components for all the AI development tools supported by PromptFlow.

## Available Icons

- **CursorIcon** - Cursor IDE logo
- **WindsurfIcon** - Windsurf development environment logo  
- **V0Icon** - V0.dev UI generator logo
- **LovableIcon** - Lovable app development platform logo

## Usage

### Basic Usage

```tsx
import { CursorIcon, WindsurfIcon, V0Icon, LovableIcon } from './components/icons';

// Use with default size (24px)
<CursorIcon />
<WindsurfIcon />
<V0Icon />
<LovableIcon />
```

### Custom Size and Styling

```tsx
// Custom size
<CursorIcon size={32} />
<WindsurfIcon size={48} />

// With CSS classes
<V0Icon className="text-blue-500 hover:text-blue-700" />
<LovableIcon className="w-8 h-8 text-red-500" />
```

### Using the Tools Collection

```tsx
import { Tools, ToolIcons } from './components/icons';

// Render all tools
{Tools.map(tool => {
  const Icon = tool.icon;
  return (
    <div key={tool.id} className="flex items-center gap-2">
      <Icon size={20} />
      <span>{tool.name}</span>
      <span className="text-gray-500">{tool.description}</span>
    </div>
  );
})}

// Access specific tool icon
const CursorIcon = ToolIcons.cursor;
<CursorIcon size={24} />
```

### In Documentation

Perfect for README files, documentation, and prompt headers:

```markdown
## 🔧 Supported Tools

- ![Cursor](cursor-icon) **Cursor** - AI-powered code editor
- ![Windsurf](windsurf-icon) **Windsurf** - AI development environment  
- ![V0](v0-icon) **V0.dev** - AI UI component generator
- ![Lovable](lovable-icon) **Lovable** - AI app development platform
```

## Props

All icon components accept the same props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width and height in pixels |
| `className` | `string` | `""` | CSS classes for styling |

## Colors

Each tool has an associated brand color:

- **Cursor**: `#000000` (Black)
- **Windsurf**: `#58E5BB` (Teal)
- **V0.dev**: `#000000` (Black)  
- **Lovable**: `#ff1814` (Red)

## File Structure

```
components/icons/
├── index.tsx          # All icon components and exports
├── README.md          # This documentation
└── examples.tsx       # Usage examples (optional)
```

## Integration with PromptFlow

These icons are designed to work seamlessly with the PromptFlow project structure:

```tsx
// In prompt documentation
import { CursorIcon } from '@/components/icons';

export const CursorPromptHeader = () => (
  <div className="flex items-center gap-2 mb-4">
    <CursorIcon size={20} />
    <h2>Cursor: Advanced Code Refactoring</h2>
  </div>
);
``` 