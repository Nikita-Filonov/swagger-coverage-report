import { fireEvent, render, screen } from '@testing-library/react';
import { WidgetView } from './WidgetView';

it('renders widget content and calls toolbar actions', () => {
  const onClick = vi.fn();
  const { rerender } = render(
    <WidgetView
      title="Summary"
      actions={[{ icon: <span>Refresh</span>, onClick, badgeContent: 2 }, { content: <span>More</span> }]}>
      Report content
    </WidgetView>
  );
  expect(screen.getByText('Summary')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button'));
  expect(onClick).toHaveBeenCalledOnce();
  expect(screen.getByText('More')).toBeInTheDocument();
  rerender(<WidgetView>Untitled content</WidgetView>);
  expect(screen.queryByText('Summary')).not.toBeInTheDocument();
  expect(screen.getByText('Untitled content')).toBeInTheDocument();
});
