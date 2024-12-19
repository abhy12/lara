<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class Contact extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(public $args)
    {
        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Contact',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $args = $this->args;
        $name = isset($args['name']) ? $args['name'] : '';
        $org = isset($args['organization']) ? $args['organization'] : '';
        $email = isset($args['email']) ? $args['email'] : '';
        $query = isset($args['message']) ? $args['message'] : '';

        return new Content(
            view: 'emails.contact',
            with: [
                'name' => $name,
                'organization' => $org,
                'query' => $query,
                'email' => $email,
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
