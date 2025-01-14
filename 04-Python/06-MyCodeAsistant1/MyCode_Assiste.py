import re

class CodeAssistant:
    def __init__(self):
        self.commands = {
            'help': self.show_help,
            'format': self.format_code,
            'count_lines': self.count_lines,
            'find_functions': self.find_functions,
            'indent': self.fix_indentation
        }
    
    def show_help(self, _):
        """Show available commands"""
        return """Available commands:
        - help: Show this help message
        - format: Basic code formatting
        - count_lines: Count lines of code
        - find_functions: List all functions in the code
        - indent: Fix basic indentation
        
        Usage: command:your_code_here"""
    
    def format_code(self, code):
        """Basic code formatting"""
        # Remove multiple blank lines
        code = re.sub(r'\n\s*\n', '\n\n', code)
        # Add space after commas
        code = re.sub(r',(?!\s)', ', ', code)
        # Add space around operators
        code = re.sub(r'([=+\-*/])', r' \1 ', code)
        return code
    
    def count_lines(self, code):
        """Count non-empty lines of code"""
        lines = [line for line in code.split('\n') if line.strip()]
        return f"Number of non-empty lines: {len(lines)}"
    
    def find_functions(self, code):
        """Find function definitions"""
        pattern = r'def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\('
        functions = re.findall(pattern, code)
        return "Functions found: " + ", ".join(functions) if functions else "No functions found"
    
    def fix_indentation(self, code):
        """Basic indentation fixing"""
        lines = code.split('\n')
        indented = []
        indent_level = 0
        
        for line in lines:
            stripped = line.strip()
            if stripped.endswith(':'):
                indented.append('    ' * indent_level + stripped)
                indent_level += 1
            elif stripped.startswith(('return', 'break', 'continue')):
                indent_level = max(0, indent_level - 1)
                indented.append('    ' * indent_level + stripped)
            else:
                indented.append('    ' * indent_level + stripped)
        
        return '\n'.join(indented)
    
    def process_command(self, user_input):
        """Process user commands"""
        try:
            command, code = user_input.split(':', 1)
            command = command.strip().lower()
            
            if command in self.commands:
                return self.commands[command](code)
            else:
                return f"Unknown command. Type 'help:' for available commands."
        except ValueError:
            return "Invalid input format. Use 'command:code'"

# Example usage
def main():
    assistant = CodeAssistant()
    print("Code Assistant initialized. Type 'help:' for commands, or 'quit' to exit.")
    
    while True:
        user_input = input("\nEnter command: ")
        if user_input.lower() == 'quit':
            break
        
        result = assistant.process_command(user_input)
        print("\nResult:")
        print(result)

if __name__ == "__main__":
    main()